import Dog from "./dog";

export default function DogList( { dogs, onDelete }) {
    const handleDelete = (name) => {
        onDelete(name);
    }

    return (
        <main>
            <h1>Dogs</h1>
            <ul>
                {
                    dogs.map(
                        (dog) => (
                            <Dog name={dog.name} age={dog.age} onDelete={handleDelete} key={dog.id}/>
                        )
                    )
                }
            </ul>
        </main>
    );
}