
const fetchRandomDog = () => {
    const response = fetch("https://dog.ceo/api/breeds/image/random");
}

export default function Page() {
    return (
        <main>
            <h1 className="text-center text-4xl">Week 7 Lecture</h1>

            <div>
                <h1 className="text-3xl">Dogs</h1>
            </div>
        </main>
    );
}