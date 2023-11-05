"use client";

import { useState } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";

import itemsJson from "./items.json";

export default function Page() {
  const [items, setItems] = useState([...itemsJson]);

  const handleAddItem = (item) => {
    setItems(
      [...items, item]
    )
  }

  return (
    <main className="p-8 bg-slate-900 min-h-screen">

        <div>
          <NewItem onAddItem={handleAddItem}/>
        </div>

        <div>
            <h1 className="text-4xl">Shopping List</h1>
        </div>

        <div>
            <ItemList items={items}/>
        </div>
    </main>
  );
}