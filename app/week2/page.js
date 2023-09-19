import StudentInfo from "../StudentInfo";
import Link from "next/link";
import HomePage from "../homePage"

export default function Home() {
  return (
    <main>
          <h1>My Shopping Lists</h1>
          <StudentInfo />
          <HomePage />
    </main>
  );
}
