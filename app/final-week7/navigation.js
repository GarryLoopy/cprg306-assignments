
import { useState } from "react";

import NavButton from "./nav-button";

const typesAvailable = {
    "Sort by name": false,
    "Sort by category": false,
    "Group by category": false,
}

export default function Navigation( {onItemSelect} ) {
    const [types, setTypes] = useState(typesAvailable);

    const resetSort = () => {
        const newType = {
            "Sort by name": false,
            "Sort by category": false,
            "Group by category": types["Group by category"]
        }

        setTypes(newType);
    }

    const handleButtonClick = (contentType) => {
        resetSort();

        let newType = {...types};

        switch (contentType) {
            case "Sort by name":
                newType["Sort by name"] = !types["Sort by name"];
                break;
            case "Sort by category":
                newType["Sort by category"] = !types["Sort by category"];
                break;
            case "Group by category":
                newType["Group by category"] = !types["Group by category"];
                break;
        }

        setTypes(newType);

        onItemSelect(contentType)
    }

    return (
        <div className="flex gap-4">
            {
                Object.keys(types).map (
                    (typeVal) => {
                        return <NavButton contents={typeVal} onButtonClick={handleButtonClick} selectedState={types[typeVal]}/>
                    }
                )
            }
        </div>
    )
}