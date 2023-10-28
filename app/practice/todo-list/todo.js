export default function Todo( { todo, handleRemove } ) {

    const onButtonClick = () => {
        handleRemove(todo.id);
    }   

    return (
        <li>
            <h2 className="text-2xl">{todo.title}</h2>
            <p>{todo.description}</p>
            <button onClick={onButtonClick} className="bg-slate-700 p-4">Remove todo</button>
        </li>
    );
}