import StudentInfo from "../StudentInfo";
import Link from "next/link";
import HomePage from "../homePage"

export default function Home() {
  return (
    <main class="bg-slate-950 p-8">
        <h1 class="text-4xl">My Shopping Lists</h1>
        <StudentInfo />
        <HomePage />
    </main>
  );
}

