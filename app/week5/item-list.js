"use client";

import { useState } from 'react';
import Item from './item';
import jsonData from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const [grouped, setGrouped] = useState(false);

    const items = [...jsonData];

    let displayedItems = items.sort(
        (a, b) => {
            if (sortBy === "name") {
                let nameA = a["name"].toLowerCase();
                let nameB = b["name"].toLowerCase();

                if (nameA > nameB)
                    return 1;
                else if (nameA < nameB)
                    return -1;
                else 
                    return 0;
            }
            else if (sortBy === "category") {

                let categoryA = a["category"].toLowerCase();
                let categoryB = b["category"].toLowerCase();
                
                if (categoryA > categoryB)
                    return 1;
                else if (categoryA < categoryB)
                    return -1;
                else
                    return 0;
            } else if (sortBy === "quantity") {
                return a["quantity"] - b["quantity"];
            }
        }
    );

    let groupedItems = {}
    let newGroupedItems = displayedItems.map(
        (item) => {
            if (!groupedItems[item["category"]]) {
                groupedItems[item["category"]] = [item];
            }
            else {
                groupedItems[item["category"]].push(item);
            }
        }
    )

    return (
        <>
            <div class="mt-4 flex gap-8">
                <div>
                    <p class="px-2">Sort By</p>
                    <select 
                        class="bg-slate-800 px-6 py-4 hover:bg-slate-700 rounded-lg"
                        onChange={(event) => setSortBy(event.target.value)}>
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                        <option value="quantity">Quantity</option>
                    </select>
                </div>
                <div>
                    <p class="px-2">Group By</p>
                    <select class="bg-slate-800 px-6 py-4 hover:bg-slate-700 rounded-lg"
                            onChange={(event) => {
                                if (event.target.value === "none") {
                                    setGrouped(false);
                                } else {
                                    setGrouped(true);
                                }
                            }}>
                        <option value="none">None</option>
                        <option value="category">Category</option>
                    </select>
                </div>
            </div>

            {!grouped && 
                <ul>
                    {
                        //{ name, quantity, category}
                        displayedItems.map((item) => (
                            <Item item={item} key={item.id}/>
                        ))
                    }
                </ul>
            }
        </>
    )
}