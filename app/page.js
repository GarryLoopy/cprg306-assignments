import StudentInfo from "./StudentInfo";
import Link from "next/link";
import Week from "./week";

export default function Home() {
  return (
    <main>
          <div>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <StudentInfo />
          </div>

          <Week weekNumber="2" />
          <Week weekNumber="3" />
    </main>
  );
}
