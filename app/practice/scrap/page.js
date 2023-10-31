"use client" 
import NewItem from './new-item'
import ItemList from './item-list'
import itemsData from './item.json'
export default function Page() {
  const [items, setItems] = useState(itemsData); // Initialize a state variable with itemsData
  const handleAddItem = (newItem) => {
    // Add a new item to the items state
    setItems([...items, newItem]);
  };
 
  // Rest of your render function code
    return (
<main className="bg-neutral-800 text-gray-50">
<h1 className='px-4 '>Shopping List</h1>
<div>
<NewItem onAddItem={handleAddItem} /> {/* Pass the event handler to NewItem */}
<ItemList items={items} /> {/* Pass the items state to ItemList */}
</div>
<ItemList/>
</main>
    );
}