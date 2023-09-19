import ItemList from "./item-list";
import HomePage from "../homePage";

export default function Home() {
  return (
    <main class="bg-slate-950">

        <div>
            <h1 class="text-3xl font-bold m-2">
                Shopping List
            </h1>
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
