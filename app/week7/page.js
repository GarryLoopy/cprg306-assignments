"use client";

import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import NavBar from "../navbar";

import MealIdeas from "./meal-ideas";

import itemsJson from "./items.json";

export default function Page() {
  const [items, setItems] = useState([...itemsJson]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItem = (item) => {
    setItems(
      [...items, item]
    )
  }

  const handleOnItemSelect = (item) => {
    // setSelectedItem(item);
    
    let currentItem = item.name.split(',')[0];

    setSelectedItem(currentItem);
  }

  return (
    <main class="p-8 bg-slate-900 min-h-screen">
        <div>
          <NavBar />
        </div>

        <div>
          <NewItem onAddItem={handleAddItem}/>
        </div>

        <div>
            <h1 class="text-4xl">Shopping List</h1>
        </div>
        
        <div className="flex">
            <ItemList items={items} onItemSelect={handleOnItemSelect}/>
            
            <MealIdeas ingredient={selectedItem}/>
        </div>
    </main>
  );
}