"use client";

import { useState, useEffect } from "react";



const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data;
}

export default function MealIdeas( { ingredient } ) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async (ingredient) => {
        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data);
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
        Meal ideas
        </div>
    )
}