"use client";

import { useState } from "react";

export default function AddTodo( {onSubmit} ) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(
            {
                title,
                description
            }
        )

        setTitle("");
        setDescription("");
    }
    return (
        <form onSubmit={handleSubmit} className="m-4 p-2 bg-slate-900">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={handleTitleChange} value={title} className="text-black" required></input>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={handleDescriptionChange} value={description} className="text-black" required></input>
            <button type="submit" className="p-4 m-2 bg-slate-800">Add new todo</button>
        </form>
    );  
}