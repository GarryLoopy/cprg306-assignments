"use client";

import Item from "./item";
import itemsJson from "./items.json";

import { useState } from "react";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState("none");

    const items = [...itemsJson];


    const compareName = (a, b) => {
        if (a.name > b.name)
            return 1;
        else if (a.name < b.name)
            return -1;
        else
            return 0;
    }

    const compareCategory = (a, b) => {
        if (a.category > b.category)
            return 1;
        else if (a.category < b.category)
            return -1;
        else
            return 0;
    }

    const displayedItems = items.sort(
        (a, b) => {
            if (sortBy === "name")
                return compareName(a, b);
            else if (sortBy === "category")
                return compareCategory(a, b);
        }
    );

    const groupedItems = displayedItems.reduce(
        (accumulator, item) => {
            const category = item.category;

            if (!accumulator[category])
                accumulator[category] = [];
            accumulator[category].push(item);

            return accumulator;
        }, {}
    );

    const handleSortNameButton = () => setSortBy("name");
    const handleCategoryNameButton = () => setSortBy("category");
    const handleGroupedButton = () => setGrouped( () => !grouped );
    

    return (
        <main>
            <div className="flex flex-row">
                <div className={`p-4 m-2 bg-slate-500 hover:bg-slate-600 ${sortBy === "name" ? "bg-slate-800" : ""}`} onClick={handleSortNameButton}>
                    Sort by name
                </div>
                <div className={`p-4 m-2 bg-slate-500 hover:bg-slate-600 ${sortBy === "category" ? "bg-slate-800" : ""}`} onClick={handleCategoryNameButton}>
                    Sort by category
                </div>
                <div className={`p-4 m-2 bg-slate-500 hover:bg-slate-600 ${grouped ? "bg-slate-800" : ""}`} onClick={handleGroupedButton}>
                    Group by category
                </div>
            </div>

            <ul>
                {grouped
                    ? Object.keys(groupedItems).map((category) => (
                          <div key={category}>
                              <h2>{category}</h2>
                              <ul>
                                  {groupedItems[category].map((item) => (
                                      <Item item={item} key={item.id} />
                                  ))}
                              </ul>
                          </div>
                      ))
                    : displayedItems.map((item) => <Item item={item} key={item.id} />)}
            </ul>

        </main>
    )
}