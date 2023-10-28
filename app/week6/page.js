"use client";

import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import NavBar from "../navbar";

import itemsJson from "./items.json";

export default function Page() {
  const [items, setItems] = useState([...itemsJson]);

  const handleAddItem = (item) => {
    setItems(
      [...items, item]
    )
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

        <div>
            <ItemList items={items}/>
        </div>
    </main>
  );
}