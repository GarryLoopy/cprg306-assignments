import Todo from "./todo";
import AddTodo from "./add-todo";
export default function TodoList({ stuff, handleRemove, handleSubmit }) {
  return (
    <div>
        <AddTodo onSubmit={handleSubmit}/>

        <ul className="flex flex-col gap-4 m-4 p-4 bg-slate-900">
            {stuff.map((thing) => (
            <Todo todo={thing} key={thing.id} handleRemove={handleRemove} />
            ))}
        </ul>
    </div>
  );
}
