"use client";

import { useState } from "react";
import Button from "./button";
import NavBar from "../navbar";

export default function Page() {
    const [playerActive, setPlayerActive] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});

    const positionOffset = 100;

    const onButtonClick = (event) => {
        setPosition({x: 0, y: 0});

        setPlayerActive(!playerActive);
    };

    const movePlayerLeft = () => {

      if (position.x <= 0) return;

      const newX = position.x - positionOffset;

      setPosition({x: newX, y: position.y});
    };

    const movePlayerRight = () => {
      if (position.x >= 800) return;

      const newX = position.x + positionOffset;

      setPosition({x: newX, y: position.y});
    };

    const movePlayerUp = () => {

      if (position.y <= 0) return;
      const newY = position.y - positionOffset;

      setPosition({x: position.x, y: newY});
    };

    const movePlayerDown = () => {
      if (position.y >= 800) return;
      const newY = position.y + positionOffset;

      setPosition({x: position.x, y: newY});
    };

    return (
      <main>
        <div>
          <NavBar />
        </div>

        <div onClick={onButtonClick} class="ml-96">
          {!playerActive && <Button content={"Set Movement"}/>}
          {playerActive && <Button content={"Remove Movement"}/>}
          <p>Player position: {position.x}, {position.y}</p>
        </div>
        
        { playerActive &&
          <div 
            class="absolute duration-500 ease-in-out transform bg-gray-700 p-6 rounded-full"
            style={{ left: `${position.x}px`, top: `${position.y}px`}}>
              Position
          </div>
        }

        { playerActive && 
          <div class="flex flex-col gap-2 m-2">
            <div onClick={movePlayerUp}>
              <button class="bg-gray-800 hover:bg-gray-600 active:bg-gray-500 text-gray-100 font-semibold px-6 py-5 ml-11 rounded-lg">Up</button>
            </div>
            <div class="flex gap-4">
              <div onClick={movePlayerLeft}>
                <button class="bg-gray-800 hover:bg-gray-600 active:bg-gray-500 text-gray-100 font-semibold p-5 rounded-lg">Left</button>
              </div>
              
              <div onClick={movePlayerRight}>
                <button class="bg-gray-800 hover:bg-gray-600 active:bg-gray-500 text-gray-100 font-semibold p-5 rounded-lg">Right</button>
              </div>
            </div>
            <div onClick={movePlayerDown}>
              <button class="bg-gray-800 hover:bg-gray-600 active:bg-gray-500 text-gray-100 font-semibold px-6 py-5 ml-8 rounded-lg">Down</button>
            </div>
          </div>
        }
        
      </main>
    );
}