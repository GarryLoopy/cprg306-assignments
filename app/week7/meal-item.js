"use client";

export default function MealItem( {meal, onMealItemClick, selectedMeal} ) {

    const handleOnMealItemClick = () => {
        onMealItemClick(meal);
    }
    return(
        <li className={`text-md text-gray-400 p-2 pt-4 pb-2 border-b rounded-t-md rounded-b-sm 
                        border-gray-800 hover:bg-gray-800 hover:border-gray-700 hover:text-white 
                            hover:cursor-pointer active:bg-slate-700 ${selectedMeal ? "bg-slate-800 text-white border-gray-900" : ""}`}
                                onClick={handleOnMealItemClick}>
                                {meal["strMeal"]}
        </li>
    )
}