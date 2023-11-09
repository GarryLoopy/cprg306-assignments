"use client";

export default function MealItem( {meal, onMealItemClick, selectedMeal, mealInfo} ) {


    const getIngredients = () => {
        if (!mealInfo) return [];

        let ingredientCounter = Object.keys(mealInfo).filter( (key) => key.includes("strIngredient"));
            ingredientCounter = ingredientCounter.filter( (key) => mealInfo[key]);

        let ingredients = ingredientCounter.map(
            (currentIngredient) => {
                const index = currentIngredient.replace("strIngredient", "");

                const measurement = mealInfo[`strMeasure${index}`];

                const ingredient = mealInfo[currentIngredient];

                return (measurement + " " + ingredient);
            }
        )
        
        return ingredients
    }

    // const getStringOfIngredients = () => {
    //     if (!mealInfo) return [];
    //     let stringOfIngredients = Object.keys(mealInfo).filter( (key) => key.includes("strIngredient")) ;
    //     stringOfIngredients = stringOfIngredients.filter( (key) => mealInfo[key]);

    //     return stringOfIngredients;
    // }

    const ingredients = getIngredients();

    const handleOnMealItemClick = () => {
        onMealItemClick(meal);
    }
    return(
        <li className={`text-md text-gray-400 p-2 pt-4 pb-2 border-b rounded-t-md rounded-b-sm 
                        border-gray-800 hover:bg-gray-800 hover:border-gray-700 hover:text-white 
                            hover:cursor-pointer active:bg-slate-700 ${selectedMeal ? "bg-slate-800 text-white border-gray-900 rounded-b-lg" : ""}`}
                                onClick={handleOnMealItemClick}>
                                <p className={`text-lg pb-2 ${selectedMeal ? "border-b border-gray-700 pb-4" : ""}`}>{meal["strMeal"]}</p>
                                {
                                    selectedMeal && 
                                    <div className="mt-2 pl-4">
                                        <div className="text-xl">
                                            <h2>Ingredients needed:</h2>
                                        </div>
                                        <div className="p-2 pl-4 flex flex-col gap-1">
                                        {
                                            ingredients.map(
                                                (currentIngredients) => (
                                                    <p key={currentIngredients} className="text-md text-gray-400 hover:text-white capitalize">{currentIngredients}</p>
                                                )
                                            )
                                            
                                        }
                                        </div>

                                    </div>
                                }
                                
        </li>
    )
}