import StudentInfo from "../studentInfo";
import NavBar from "../navbar";

export default function Page() {
  return (
    <main class="p-8">

        <div>
          <NavBar />
        </div>
        <h1 class="text-4xl">My Shopping Lists</h1>
        <StudentInfo />
    </main>
  );
}

