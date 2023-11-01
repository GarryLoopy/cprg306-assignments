"use client";

import jsonData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

import MealIdeas from "./meal-ideas";

import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState([...jsonData]);
    const [selectedItem, setSelectedItem] = useState("bananas");

    const handleAddItem = (item) => {
        setItems(
            [...items, item]
        )
    }

    const handleOnItemSelect = (itemName) => {
        let finalItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        finalItemName = finalItemName.split(',')[0]
        finalItemName = finalItemName.trim();

        setSelectedItem(finalItemName);
    }

    return (
        <main className="flex">
            <div className="flex-1">
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleOnItemSelect}/>
            </div>

            <div className="flex-1">
                <MealIdeas ingredient={selectedItem}/>
            </div>
        </main>
    )
}