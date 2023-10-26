import ItemList from "./item-list";
import NavBar from "../navbar";

export default function Page() {
  return (
    <main class="p-8 bg-slate-900 min-h-screen">
        <div>
          <NavBar />
        </div>

        <div>
            <h1 class="text-4xl">Shopping List</h1>
        </div>

        <div>
            <ItemList />
        </div>
    </main>
  );
}