"use client";

import { useState } from 'react';

import LinkItem from './link-item';

const currentWeek = 10;

const getWeekObjects = () => {
    let weekObjects = [];

    weekObjects.push(
        {
            path: `/`,
            title: `Home`
        }
    )

    for (let index = 2; index <= currentWeek; index++) {
        if (index === 9) continue;
        weekObjects.push(
            {
                path: `/week${index}`,
                title: `Week ${index}`
            }
        )
    }

    return weekObjects;
}

export default function NavBar() {
    // BUG: Navigation bar defaults to Home outline after each web browser reload
    const [selectedPath, setSelectedPath] = useState("/");

    const handleOnSelect = (path) => {
        setSelectedPath(path);
    }

    const linkItems = getWeekObjects();
    return (
        <nav className="text-white py-3 px-4 border-b-2 border-gray-800">
            <div>
                <ul className="flex gap-2">
                    {
                        linkItems.map(
                            (week) => (
                                <li key={week.week}>
                                    <LinkItem path={week.path} title={week.title} onSelect={handleOnSelect} selectedPath={selectedPath == week.path} />
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}