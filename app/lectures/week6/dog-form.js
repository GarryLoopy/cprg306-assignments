"use client";

import { useState } from "react";

export default function DogForm( { onSubmit }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleOnChangeName = (e) => setName(e.target.value);
    const handleOnChangeAge = (e) => setAge(parseInt(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        const dog = { name, age }
        onSubmit(dog);

        setAge(0);
        setName("");
    }
    return (
        <div className="border m-2 p-4">
            <h2>Add a dog</h2>
            <form onSubmit={handleSubmit}>
                <div></div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={ handleOnChangeName } className="text-black"/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={age} onChange={ handleOnChangeAge } className="text-black"/>
                <button className="p-2 border ml-4">Add dog</button>
            </form>
        </div>
    );
}