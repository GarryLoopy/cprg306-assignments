import ItemList from "./item-list";
import Link from "next/link";

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
            <Link href="/">Home</Link>
        </div>
    </main>
  );
}
