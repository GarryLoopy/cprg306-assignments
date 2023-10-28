"use client";

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CounterDisplay count={count} />
            <button className="m-2 p-4 bg-slate-700" onClick={ () => setCount(count + 1)}>Increment</button>
        </div>
    )
}
const CounterDisplay = ({ count} ) => <div>The count is {count}</div>

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <ComponentA count={count} onClick={handleClick} />
            <ComponentB count={count} onClick={handleClick} />
        </div>
    );
}

const ComponentA = ( { count, onClick } ) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onClick}>Increment</button>
        </div>
    );
}
const ComponentB = ( { count, onClick } ) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={onClick}>Increment</button>
        </div>
    );
}

export default function Page() {

    const example1 = () => {
        // Strings are immutable
        const str = "Hello";
        const newStr = str.toUpperCase();

        // Objects and arrays are mutable
        const arr = [1, 2, 3];
        arr.push(4);
        
        // Use of spread operator can help us work with immutable data
        const newArr = [...arr, 5];

        // Multiple use of the spread operator to modify inner nest
        const obj = {
            name: "Daisy",
            age: 25,
            address: {
                city: "Calgary"
            }
        };

        const newObj = {
            ...obj,
            address: {
                ...obj.address,
                country: "Canada"
            }
        }

        console.log(newObj);
    }

    const example2 = () => {
        const arr = [
            { name: "Daisy", age: 25},
            { name: "Puddles", age: 30}
        ];

        const newArr = arr.map(
            (item) => item.name === "Daisy" ? { ...item, age: 26 }: item
        );
        console.log(newArr);
    }
    

    return (
        <main className="border">
            <Counter />
            <ParentComponent />
        </main>
    );
}