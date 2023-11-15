"use client";

import { useState, useEffect } from "react";
import MealItem from "./meal-item";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json(); // Await the response.json() method
    return data;
};

const fetchMealInfo = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data;
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);

    const [mealInfos, setMealInfos] = useState([]);

    const [selectedMeal, setSelectedMeal] = useState("");

    const loadMealIdeas = async () => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data["meals"]);
    }

    const loadMealInfos = async () => {
        if (!meals) return;
        const currentMealInfos = {};
        await Promise.all(
            meals.map(
                async (currentMeal)=> {
                    const currentId = currentMeal["idMeal"];
                    const data = await fetchMealInfo(currentId);

                    if (!currentMealInfos[currentId]) {
                        currentMealInfos[currentId] = data.meals[0];
                    }
                }   
            )
        )
        setMealInfos(currentMealInfos);
    }

    useEffect(
        () => {
            try {

                if (!ingredient) {
                    setSelectedMeal("");
                    setMealInfos([]);
                    setMeals([]);

                    return;
                }
                loadMealIdeas();

                setSelectedMeal("");
                setMealInfos([]);

            } catch (error) {
                console.error(error);
            }
        }, [ingredient]
    )

    useEffect(
        () => {
            try {
                loadMealInfos();
            } catch (error) {
                console.error(error);
            }
            
        }, [meals]
    )

    const handleOnMealItemClick = (meal) => {
        if (selectedMeal === meal["idMeal"]){
            setSelectedMeal("");
            return;
        } 

        setSelectedMeal(meal["idMeal"]);
    }

    return (
        <div className="m-4 p-4 border rounded-md border-gray-800 bg-gray-950">
            <div className="mb-4 flex flex-col gap-1">
                <h2 className="text-2xl">
                    { ingredient ?
                        `Meal ideas for ${ingredient}`
                        :
                        "Meal ideas (select an item)"
                    }
                </h2>
                {ingredient &&
                    <h2 className="text-sm">
                        {meals ? 
                            `Found ${meals.length} meal ideas for ${ingredient}` : 
                            `No meal ideas found for ${ingredient}`
                        }
                    </h2>
                }
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
                                <MealItem  onMealItemClick={handleOnMealItemClick} meal={meal} selectedMeal={selectedMeal === meal["idMeal"]} mealInfo={mealInfos[meal["idMeal"]]}/>
                            </div>
                        )
                    )
                
                }
            </ul>
        </div>
    )
}