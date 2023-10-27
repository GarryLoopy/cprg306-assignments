"use client";

import { useState } from "react";

import DogList from "./dog-list";
import DogForm from "./dog-form";

const dogsData = [
    { name: "Sparky", age: 2, id: 1},
    { name: "Loopy", age: 2, id: 2},
    { name: "Rover", age: 7, id: 3},
    { name: "Rex", age: 10, id: 4}
];

export default function Page() {
    const [dogs, setDogs] = useState(dogsData);

    const handleSubmit = ( dog ) => {
        alert(`Adding dog\n\nName: ${dog.name}\nAge: ${dog.age}`);

        setDogs([...dogs, dog]);
    }

    const handleDelete = (name) => {
        alert(`Deleting ${name}`)
        setDogs(dogs.filter(
            (dog) => dog.name !== name
        ));
    }

    return (
        <>
            <DogForm onSubmit={handleSubmit}/>
            <DogList dogs={dogs} onDelete={handleDelete}/>
        </>
    )
}