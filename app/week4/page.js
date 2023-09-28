import NavBar from "../navbar";
import NewItem from "./new-item";

export default function Page() {
    return (
        <main class="p-8">
            <div>
                <NavBar />
            </div>
            
            <NewItem />
        </main>
    );
}