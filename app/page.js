import StudentInfo from "./studentInfo";
import Week from "./week";
import NavBar from "./navbar";

const currentWeek = 5;

function createDivWithComponents(n) {
  const components = [];
  for (let i = 2; i <= n; i++) {
    components.push(<Week weekNumber={i} />);
  }
  return <div>{components}</div>;
}

export default function Page() {
  return (
    <main class="flex flex-col p-8 h-screen  bg-slate-800">
      <div>
        <div>
          <NavBar />
        </div>

        <div>
          <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
          <StudentInfo />
        </div>

        {createDivWithComponents(currentWeek)}
      </div>

    </main>
  );
}



