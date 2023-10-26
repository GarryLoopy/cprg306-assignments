export default function Item( {item} ) {
    return (
        <li className="p-4 bg-slate-500 m-2">
            <h2>{item.name}</h2>
            <p>Buy {item.quantity} in {item.category}</p>
        </li>
    )
}