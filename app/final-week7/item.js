export default function Item( {item, onItemSelect, selectedState} ) {

    const handleOnItemSelect = () => {
        onItemSelect(item.name);
    }

    return(
        <li className={`text-center p-4 border rounded-md text-gray-400 border-gray-800 
                    bg-gray-950 hover:bg-gray-800 hover:border-gray-700 hover:cursor-pointer 
                    hover:text-white ${selectedState ? "bg-slate-800 text-white" : ""}`} onClick={handleOnItemSelect}>    
            <h2 className="text-lg text-gray-400">{item.name}</h2>
            <p className="text-md">Buy {item.quantity} in {item.category}</p>
        </li>
    )
}