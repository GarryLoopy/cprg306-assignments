import { useState } from "react";
import NavButton from "./nav-button";
const typesAvailable = {
    "Sort by name": true,
    "Sort by category": false,
    "Group by category": false,
};

export default function Navigation({ onItemSelect }) {
    const [types, setTypes] = useState(typesAvailable);

    const handleButtonClick = (contentType) => {
        let newTypes = { ...types };
        if (contentType === "Sort by name") {
            newTypes = {
                "Sort by name": true,
                "Sort by category": false,
                "Group by category": types["Group by category"],
            };
        } else if (contentType === "Sort by category") {
            newTypes = {
                "Sort by name": false,
                "Sort by category": true,
                "Group by category": types["Group by category"],
            };
        } else if (contentType === "Group by category") {
            newTypes = {
                "Sort by name": types["Sort by name"],
                "Sort by category": types["Sort by category"],
                "Group by category": !types["Group by category"],
            };
        }
        setTypes(newTypes);
        onItemSelect(contentType);
    };

    return (
        <div className="flex gap-4">
            {Object.entries(types).map(([type, selectedState]) => (
                <NavButton
                    key={type}
                    contents={type}
                    onButtonClick={handleButtonClick}
                    selectedState={selectedState}
                />
            ))}
        </div>
    );
}