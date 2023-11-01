export default function Item( {item, onItemSelect, selectedItem} ) {

    const handleOnItemSelect = () => {
        const currentItem =  {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            category: item.category
          }
        onItemSelect(currentItem);
    }

    return(
        <li className={`text-center p-4 border rounded-md text-gray-400 border-gray-800 
                    bg-gray-950 hover:bg-gray-800 hover:border-gray-700 hover:cursor-pointer 
                    hover:text-white ${selectedItem ? "bg-slate-800 text-white border-gray-900" : ""}`} onClick={handleOnItemSelect}>    
            <h2 className="text-lg text-gray-400">{item.name}</h2>
            <p className="text-md">Buy {item.quantity} in {item.category}</p>
        </li>
    )
}