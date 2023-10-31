"use client";

import jsonData from "./items.json";
import ItemList from "./item-list";

export default function Page() {
    const items = [...jsonData];

    return (
        <main>
            <ItemList items={items} />
        </main>
    )
}