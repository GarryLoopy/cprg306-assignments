import NavButton from "./nav-button";

import { useState } from "react";

export default function ExtraOptions( { onOptionClick } ) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        onOptionClick();
    }

    return (
        <div className="flex justify-between mt-4">
            <div>
                <NavButton contents={`${selected ? "Finish" : "Select"}`} selectedState={selected} onButtonClick={handleClick}/> 
            </div>
            <div>
                {   selected &&
                    <NavButton contents="Delete"/> 
                }
            </div>
                       
        </div>
    )
}