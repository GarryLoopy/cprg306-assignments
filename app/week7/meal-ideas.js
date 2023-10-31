"use client";

import { useState, useEffect } from "react";

export default function MealIdeas( { onItemClick } ) {
    const [clickedItem, setClickedItem] = useState("");

    useEffect(
        () => {
            setClickedItem(onItemClick)
        }, [clickedItem]
    )

    return (
        <div>
        Meal ideas
        <p>{clickedItem}</p>
        </div>
    )
}