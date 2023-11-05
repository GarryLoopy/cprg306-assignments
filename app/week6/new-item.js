"use client";

import { useState } from "react";

export default function NewItem( { onAddItem } ) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        // Prevents the form's default submission behavior
        event.preventDefault();

        // Create a new item object
        const newItem = {
            name: name.toLowerCase(),
            quantity: quantity,
            category: category.toLowerCase(),
        }  

        onAddItem(newItem)
        
        // Reset the state variables to their default values
        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-6 m-4 rounded-md text-gray-800 bg-slate-600">
            <input className="px-2 py-3 text-center bg-gray-100 focus:bg-white hover:bg-white rounded-md" type="text" value={name} onChange={handleNameChange} placeholder="Item Name" required/>
            <input className="px-2 py-3 text-center bg-gray-100 focus:bg-white hover:bg-white rounded-md" type="number" min="1" max="99" value={quantity} onChange={handleQuantityChange} required/>
            
            <select className="px-2 py-3 text-center bg-gray-100 focus:bg-white hover:bg-white rounded-md" value={category} onChange={handleCategoryChange}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>

            <input className="py-4 text-gray-200 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 rounded-md" type="submit" value="Add Item"/>
        </form>
    );
}