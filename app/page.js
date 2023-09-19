import StudentInfo from "./StudentInfo";
import Week from "./week";

export default function Home() {
  return (
    <main class="bg-slate-950 flex flex-col p-8">
      <div>
        <div>
          <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
          <StudentInfo />
        </div>

        <div>
          <Week weekNumber="2" />
          <Week weekNumber="3" />
        </div>
      </div>

    </main>
  );
}
