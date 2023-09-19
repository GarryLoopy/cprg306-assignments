import StudentInfo from "../StudentInfo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
          <h1>My Shopping Lists</h1>
          <StudentInfo />
          <Link href="/">Home</Link>
    </main>
  );
}
