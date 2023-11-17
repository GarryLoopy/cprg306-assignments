"use client";

import StudentInfo from "./StudentInfo";
import Week from "./week";

const currentWeek = 10;

function createDivWithComponents(n) {
  const components = [];
  for (let i = 2; i <= n; i++) {
    if (i === 9) continue;
    components.push(<Week weekNumber={i} key={i} />);
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
      <div>
        <audio controls>
          <source src="/huh.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </main>
  );
}
