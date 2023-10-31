"use client";

import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import NavBar from "../navbar";

import MealIdeas from "./meal-ideas";

import itemsJson from "./items.json";

export default function Page() {
  const [items, setItems] = useState([...itemsJson]);
  const [clickedItem, setClickedItem] = useState("");

  const handleAddItem = (item) => {
    setItems(
      [...items, item]
    )
  }

  const handleOnItemClick = (itemName) => {
    setClickedItem(itemName);
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
            <ItemList items={items} onItemClick={handleOnItemClick}/>
            
            <MealIdeas onItemClick={clickedItem}/>
        </div>
    </main>
  );
}