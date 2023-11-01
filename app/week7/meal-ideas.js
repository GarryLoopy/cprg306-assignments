"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = response.json();
    return data;
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data["meals"]);
    }

    useEffect(
        () => {
            try {
                loadMealIdeas();
                console.log(meals);
            } catch (error) {
                console.error(error);
            }
        }, [ingredient]
    )

    console.log(ingredient);

    return (
        <div className="m-4 p-4 border rounded-md border-gray-800">
            <div className="mb-4 flex flex-col gap-1">
                <h2 className="text-2xl">Meal Ideas for {ingredient}</h2>
                {meals && <h2 className="text-sm">Found {meals.length} meals</h2>}
            </div>
            
            
            <ul className="flex flex-col gap-4">
                {
                    !meals ? <h2>No meal ideas found for {ingredient}</h2>
                    :
                    meals.map(
                        (meal) => (
                            <li key={meal} className="text-md text-gray-400 p-2 pt-4 pb-2 border-b rounded-t-md rounded-b-sm border-gray-800 hover:bg-gray-800 hover:border-gray-700 hover:text-white hover:cursor-pointer ">
                                {meal["strMeal"]}
                            </li>
                        )
                    )
                
                }
            </ul>

        </div>
    )
}