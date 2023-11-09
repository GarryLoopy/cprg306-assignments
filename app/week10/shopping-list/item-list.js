"use client";

import {useState} from "react";

import Item from "./item"
import Navigation from "./navigation"

export default function ItemList( {items, onItemSelect} ) {
    const [sortBy, setSortBy] = useState("name");
    const [groupedByCategory, setGroupedByCategory] = useState(false);

    const [selectedItemId, setSelectedItemId] = useState("4k2J3K1H2GJKH12gk"); //ID for banana

    const handleOnItemSelect = (item) => {
        setSelectedItemId(item["id"]);
        onItemSelect(item)
    }

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

    let displayedItems = items.sort(
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

    if (groupedByCategory) {
        displayedItems = displayedItems.reduce((acc, currentItem) => {
            const foundIndex = acc.findIndex((item) => item.category === currentItem.category);
            if (foundIndex !== -1) {
                acc[foundIndex].items.push(currentItem);
            } else {
                acc.push({ category: currentItem.category, items: [currentItem] });
            }
            return acc;
        }, []);
    }

    return (
        <div className="mr-4 ml-4">
            <Navigation onItemSelect={handleOnNavigationSelect} />
            <ul className="flex flex-col gap-2">
                {groupedByCategory
                    ? displayedItems.map((group) => (
                          <div key={group.category} className="mb-4 mt-2">
                              <h2 className="text-xl capitalize pl-2">{group.category}</h2>
                              <ul className="flex flex-col gap-2">
                                  {group.items.map((item) => (
                                      <Item item={item} key={item.id} onItemSelect={handleOnItemSelect} selectedItem={item.id === selectedItemId}/>
                                  ))}
                              </ul>
                          </div>
                      ))
                    : displayedItems.map(
                        (item) => <Item item={item} key={item.id} onItemSelect={handleOnItemSelect} selectedItem={item.id === selectedItemId}/>
                    )
                }
            </ul>
        </div>
    );
}