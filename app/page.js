import StudentInfo from "./StudentInfo";
import Week from "./week";

const currentWeek = 8;

function createDivWithComponents(n) {
  const components = [];
  for (let i = 2; i <= n; i++) {
    components.push(<Week weekNumber={i} key={i}/>);
  }
  return <div>{components}</div>;
}

export default function Page() {
  return (
    <main className="flex flex-col p-8 h-screen  bg-slate-800">
      <div>
        <div>
          <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
          <StudentInfo />
        </div>

        {createDivWithComponents(currentWeek)}
      </div>

    </main>
  );
}



