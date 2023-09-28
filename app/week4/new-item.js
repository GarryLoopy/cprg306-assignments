"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
    
            console.log("name: ", name);
            console.log("quantity: ", quantity);
            console.log("category: ", category);


            alert(`Name: ${name} \nQuantity: ${quantity} \nCategory: ${category}`);
            
            setName("");
            setQuantity(1);
            setCategory("produce");

      };

    return (
        <form class="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
                class="text-black rounded-md h-10" 
                type="text" placeHolder="Item name" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
                required
            />
        

            <input 
                class="text-black rounded-md h-10" 
                type="number" 
                min={1}
                max={99}
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />



            <select 
                class="text-black rounded-md h-10" 
                value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="frozenFoods">Frozen Foods</option>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryGoods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
            </select>



            <button 
                class="bg-slate-800 hover:bg-violet-800 h-10" 
                type="submit">
                    Submit
            </button>
        </form>
    );
}


// export default function NewItem() {
//     const [name, setName] = useState("");
  
//     const handleChange = (event) => {
//       setName(event.target.value.toUpperCase());
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert("A name was submitted: " + name);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }