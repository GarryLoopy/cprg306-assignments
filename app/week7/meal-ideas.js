"use client";

import { useState, useEffect } from "react";
import MealItem from "./meal-item";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json(); // Await the response.json() method
    return data;
};

const fetchMealInfo = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await response.json();
    return data;
}


export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);

    const [mealInfo, setMealInfo] = useState([]);

    const [selectedMeal, setSelectedMeal] = useState("");

    const loadMealIdeas = async () => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data["meals"]);
    }
    const loadMealInfo = async () => {
        const data = await fetchMealInfo(selectedMeal);
        setMealInfo(data["meals"]);
    }

    useEffect(
        () => {
            try {
                loadMealIdeas();

                setSelectedMeal("");
                setMealInfo({});

            } catch (error) {
                console.error(error);
            }
        }, [ingredient]
    )


    const handleOnMealItemClick = (meal) => {
        setSelectedMeal(meal["idMeal"]);
    
        try{
            loadMealInfo();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="m-4 p-4 border rounded-md border-gray-800 bg-gray-950">
            <div className="mb-4 flex flex-col gap-1">
                <h2 className="text-2xl">Meal Ideas for {ingredient}</h2>
                <h2 className="text-sm">{meals ? `Found ${meals.length} meals for ${ingredient}` : `No meals found for ${ingredient}`}</h2>
            </div>
            
            
            <ul className="flex flex-col gap-4">
                {
                    meals &&
                    meals.map(
                        (meal) => (
                            // <li key={meal["strMeal"]} className="text-md text-gray-400 p-2 pt-4 pb-2 border-b rounded-t-md rounded-b-sm border-gray-800 hover:bg-gray-800 hover:border-gray-700 hover:text-white hover:cursor-pointer"
                            //     onClick={handleOnMealIdeaClick}>
                            //     {meal["strMeal"]}
                            // </li>
                            <div key={meal["idMeal"]}>
                                <MealItem  onMealItemClick={handleOnMealItemClick} meal={meal} selectedMeal={selectedMeal === meal["idMeal"]}/>
                            </div>
                        )
                    )
                
                }
            </ul>

        </div>
    )
}