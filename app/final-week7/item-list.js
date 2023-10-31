"use client";

import {useState} from "react";

import Item from "./item"
import Navigation from "./navigation"

export default function ItemList( {items} ) {
    const [sortBy, setSortBy] = useState("");
    const [groupedByCategory, setGroupedByCategory] = useState(false);

    const handleOnNavigationSelect = (contentType) => {
        switch(contentType) {
            case "Sort by name":
                setSortBy("name");
                break;
            case "Sort by category":
                setSortBy("category");
                break;
            case "Group by category":
                setGroupedByCategory( () => !groupedByCategory);
                break;
            default:
                console.error("Error on navigation.", contentType, " is not valid. Check navigation module.");
        }
    }

    const nameComparator = (a, b) => {
        if (a.name > b.name)
            return 1;
        else if (a.name < b.name)
            return -1;
        else 
            return 0;
    }

    const categoryComparator = (a, b) => {
        if (a.category > b.category)
            return 1;
        else if (a.category < b.category)
            return -1;
        else
            return 0;
    }

    const displayedItems = items.sort(
        (a, b) => {
            switch (sortBy) {
                case "name":
                    return nameComparator(a, b);
                case "category":
                    return categoryComparator(a, b);
                default:
                    return 0;
            }
                
        }
    )

    return (
        <div className="mr-4 ml-4">
            <Navigation onItemSelect={handleOnNavigationSelect}/>
            <ul className="flex flex-col gap-2">
                {
                    displayedItems.map(
                        (item) => <Item item={item} key={item.id}/>
                    )
                }
            </ul>
        </div>
    )
}