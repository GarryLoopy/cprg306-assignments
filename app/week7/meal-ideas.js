"use client";

import { useState, useEffect } from "react";



const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data;
}

export default function MealIdeas( { ingredient } ) {
    const [meals, setMeals] = useState({});

    const loadMealIdeas = async (ingredient) => {
        try {
            console.log(ingredient);
            const data = await fetchMealIdeas(ingredient);

            if (Array.isArray(data.meals)) {
                setMeals(data.meals); // Assuming the meals are under the 'meals' key
                console.log(meals);
            } else {
                console.error('Data format is not as expected:', data);
            }

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        () => {
            loadMealIdeas(ingredient)
        }, [ingredient]
    )

    return (
        <div>
            <h1>Meal Ideas</h1>
            <div>
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}