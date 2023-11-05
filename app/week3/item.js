export default function Item({ name, quantity, category}) {
    return (
        <div className="p-2 ml-2 mt-4 mb-4 bg-violet-800 hover:bg-violet-900 max-w-sm rounded-r-xl">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </div>
    );
}