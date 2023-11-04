"use client";

import jsonData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

import MealIdeas from "./meal-ideas";

import { useState } from "react";

import { useUserAuth } from "../_utils/auth-context";

import Link from "next/link";

/**
 * Main component for the page 
 * @returns Main component for the page
 */
export default function Page() {
    // States for the page
    const [items, setItems] = useState([...jsonData]);
    const [selectedItem, setSelectedItem] = useState("bananas");

    const { user } = useUserAuth();
    
    /**
     * Handles add item
     * @param {object} item - An item object with name, category, quantity, and id
     */
    const handleAddItem = (item) => {
        
        // Set the items for the items state
        setItems( [...items, item] )
    }

    /**
     * Function that handles selecting an item.
     * @param {object} item - An item object with name, category, quantity and id
     */
    const handleOnItemSelect = (item) => {
        // Get rid of emojis
        let finalItemName = item["name"].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        
        // Get rid of unwanted numbers and such
        finalItemName = finalItemName.split(',')[0];

        // Trim white spaces
        finalItemName = finalItemName.trim();

        // Set the name for the selectedItem state
        setSelectedItem(finalItemName);
    }

    return (
        <main className="bg-gray-900 p-8">
            {
                user ? 
                <div className="flex">
                    <div className="flex-1">
                        <NewItem onAddItem={handleAddItem}/>
                        <ItemList items={items} onItemSelect={handleOnItemSelect}/>
                    </div>

                    <div className="flex-1">
                        <MealIdeas ingredient={selectedItem}/>
                    </div>
                </div>
                :
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Sorry but we hate guests. You need to be signed in first to view this page</h1>
                    <Link href="/week8" className="hover:text-white active:bg-slate-700 hover:bg-gray-800 hover:border-gray-700 text-lg py-2 px-4 border border-gray-800 bg-gray-950 rounded-md">Go back to week 8</Link>
                </div>
            }


        </main>
    )
}