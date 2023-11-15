import NavButton from "./nav-button";

import { useState } from "react";

export default function ExtraOptions( { onOptionClick, onDeleteClick, count } ) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        onOptionClick();
    }

    const handleOnDeleteClick = () => {
        onDeleteClick();
    }

    return (
        <div className="flex justify-between mt-4">
            <div>
                <NavButton contents={`${selected ? "Finish" : "Select"}`} selectedState={selected} onButtonClick={handleClick}/> 
            </div>
            <div>
                {   selected &&
                    <NavButton contents={`Delete ${count} item(s)`} onButtonClick={handleOnDeleteClick}/> 
                }
            </div>
                       
        </div>
    )
}