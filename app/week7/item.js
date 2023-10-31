export default function Item({ item, onItemClick }) {
    return (
        <li class="p-2 ml-2 mt-4 mb-4 bg-violet-800 hover:bg-violet-900 max-w-sm rounded-r-xl" onClick={ () => onItemClick(item.name)}>
            <h2 class="text-xl font-bold">{item.name}</h2>
            <p class="text-sm">Buy {item.quantity} in {item.category}</p>
        </li>
    );
}