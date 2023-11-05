"use client";

import { useState } from 'react';

import LinkItem from './link-item';

const currentWeek = 8;

const getWeekObjects = () => {
    let weekObjects = [];

    for (let index = 2; index <= currentWeek; index++) {
        weekObjects.push(
            {
                path: `/week${index}`,
                week: index
            }
        )
    }

    return weekObjects;
}

const pathname = window.location.pathname; // Gets current path name of active window

export default function NavBar() {
    const [selectedPath, setSelectedPath] = useState(pathname);

    const handleOnSelect = (path) => {
        setSelectedPath(path);
    }

    const linkItems = getWeekObjects();
    return (
        <nav className="text-white py-4 px-4 border-b-2 border-gray-800">
            <div>
                <ul className="flex space-x-3">
                    <li><LinkItem path='/' title='Home' onSelect={handleOnSelect} selectedPath={selectedPath == "/"} /></li>
                    {
                        linkItems.map(
                            (week) => (
                                <li key={week.week}>
                                    <LinkItem path={week.path} title={`Week ${week.week}`} onSelect={handleOnSelect} selectedPath={selectedPath == week.path} />
                                </li>
                            )
                        )
                    }

                    <li><LinkItem path='/studentProject' title='Other students project' onSelect={handleOnSelect} selectedPath={selectedPath == "/studentProject"}  /></li>
                </ul>
            </div>
        </nav>
    );
}