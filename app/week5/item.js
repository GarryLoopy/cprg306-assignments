export default function Item({ item }) {
    return (
        <li className="p-2 ml-2 mt-4 mb-4 bg-violet-800 hover:bg-violet-900 max-w-sm rounded-r-xl">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-sm">Buy {item.quantity} in {item.category}</p>
        </li>
    );
}