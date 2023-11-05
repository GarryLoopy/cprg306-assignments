import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-8 bg-slate-900 min-h-screen">

        <div>
            <h1 className="text-4xl">Shopping List</h1>
        </div>

        <div>
            <ItemList />
        </div>
    </main>
  );
}
