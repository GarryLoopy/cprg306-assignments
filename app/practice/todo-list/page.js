"use client";

import { useState } from "react";

import TodoList from "./todo-list";

const examples = [
    { title: "Homework", description: "Homework from friday", id: 1},
    { title: "Homework", description: "Homework from monday", id: 2}
]

export default function Page() {
    const [thingsTodo, setThingsTodo] = useState(examples);

    const handleRemove = (id) => {
        setThingsTodo(
            thingsTodo.filter( (thing) => thing.id !== id )
        )
    }

    const handleAdd = ( thing ) => {

        const allValues = thingsTodo.reduce(
            (values, currentThing) => {
                values.push(currentThing.id);
                return values;
            }, []
        )

        let currentIndex = 0;
        while (allValues.includes(currentIndex))
        {
            currentIndex++;
        }
            
        
        const newThing = {
            ...thing,
            id : currentIndex
        }

        setThingsTodo(
            [...thingsTodo, newThing]
        )
    }

    return (
        <main>
            <TodoList stuff={thingsTodo} handleRemove={handleRemove} handleSubmit={handleAdd}/>
        </main>
    );
}