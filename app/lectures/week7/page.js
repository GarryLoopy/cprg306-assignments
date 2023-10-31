"use client";

import { useState, useEffect } from "react";

const fetchRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();
    return data.message;
}

const fetchBreedList = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");

    const data = await response.json();
    return data.message;
}

export default function Page() {
    const [dog, setDog] = useState(null);
    const [breedList, setBreedList] = useState([]);

    const loadRandomDog = async () => {
        const randomDog = await fetchRandomDog();
        setDog(randomDog);
    }

    const loadBreedList = async () => {
        const breedList = await fetchBreedList();
        setBreedList(breedList);
    }

    useEffect( 
        () => {
            loadRandomDog();
            loadBreedList();
        }, []);
    

    return (
        <main>
            <h1 className="text-center text-4xl">Week 7 Lecture</h1>

            <div>
                <h1 className="text-3xl">Dogs</h1>
                <div>
                    <img src={dog}></img>
                </div>
            </div>
            <div>
                <select name="Breed" className="text-black">
                    {
                        Object.keys(breedList).map(
                            (breed) => (<option key={breed} value={breed}>{breed}</option>)
                        )
                    }
                </select>
            </div>
        </main>
    );
}