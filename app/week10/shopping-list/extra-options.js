import NavButton from "./nav-button";

export default function ExtraOptions( { onOptionClick, onDeleteClick, count, isSelected, allowDelete } ) {

    const handleClick = () => {
        onOptionClick();
    }

    const handleOnDeleteClick = () => {
        onDeleteClick();
    }

    return (
        <div className="flex justify-between mt-4">
            <div>
                <NavButton contents={`${isSelected ? "Finish" : "Select"}`} selectedState={isSelected} onButtonClick={handleClick}/> 
            </div>
            <div>
                {   allowDelete &&
                    <NavButton contents={`Delete ${count} item(s)`} onButtonClick={handleOnDeleteClick}/> 
                }
            </div>
                       
        </div>
    )
}