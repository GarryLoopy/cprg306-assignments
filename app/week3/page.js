import ItemList from "./item-list";
import HomePage from "../homePage";

export default function Home() {
  return (
    <main class="bg-slate-950 p-8">

        <div>
            <h1 class="text-4xl font-bold">Shopping List</h1>
        </div>

        <div>
            <ItemList />
        </div>

        <div>
            <HomePage />
        </div>
    </main>
  );
}
