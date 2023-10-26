import Link from "next/link";

export default function Page() {

    const example1 = () => {
        // Create an array with three strings
        let myArray = ["apple", "banana", "cherry"];

        // Log to console the first index
        console.log(myArray[0]);

        // Declare an empty array
        let emptyArray = [];
    }

    const example2 = () => {
        // Mutator methods for arrays

        // Create a numbers array
        let numbers = [1, 2, 3, 4, 5];
        console.log(numbers);

        // Add number 6 to the end of the array
        numbers.push(6);
        console.log(numbers);

        // Remove the last element from an array
        let num = numbers.pop();
        console.log(numbers);
        console.log(`Popped number is ${num}`);

        // Remove elements from a specific array indexes
        numbers.splice(1, 2);
        console.log(numbers);
    }

    const example3 = () => {
        // Methods that do not mutate the original array

        let numbers = [5, 3, 9, 4];
        console.log(numbers);

        // Create a new array with the function applied on each element
        let doubled = numbers.map(
            (num) => num * 2
        );
        console.log(doubled);

        // Create a new array with elements that pass a specific test
        let lessThanFive = numbers.filter(
            (num) => num < 5
        );
        console.log(lessThanFive);

        // Merge two or more arrays
        let moreNumbers = [6, 7, 8];
        let mergedNumbers = numbers.concat(moreNumbers);
        console.log(mergedNumbers);

        // Returns a shallow copy of an array from an specified index
        let someNumbers = numbers.slice(1, 3);
        console.log(someNumbers);
    }

    const example4 = () => {
        // Methods that return a specific output

        let numbers = [1, 2, 3, 4, 5];
        console.log(numbers);


        // Apply a function against an accumulator and each element
        // Second param is the initial value
        let sum = numbers.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
        );
        console.log(sum);

        // Joins each element with a delimiter
        let joined = numbers.join(", ");
        console.log(joined);

        
    }

    const example5 = () => {
        const items = [
            { name: "Rice", price: 5},
            { name: "Book", price: 20 },
            { name: "Chicken", price: 10 },
            { name: "Monitor", price: 100}
        ];

        // let totalPrice = 0;
        // items.forEach(
        //     (currentItem) => {
        //         totalPrice += currentItem.price
        //     }
        // )

        const totalPrice = items.reduce(
            (total, currentItem) => {
                return total + currentItem.price
            }, 0
        );

        console.log(totalPrice);
    }

    const example6 = () => {
        const people = [
            { name: "Kyle", age: 26 },
            { name: "John", age: 31 },
            { name: "Sally", age: 42 },
            { name: "Jill", age: 42 },
        ];

        const result = people.reduce(
            (groupedPeople, currentPerson) => {
                const age = currentPerson.age;

                if (groupedPeople[age] == null)
                    groupedPeople[age] = [];

                groupedPeople[age].push(currentPerson)

                return groupedPeople;
            }, {}
        );

        console.log(result);
    }

    const example7 = () => {
        const numbers = [13, 2, 5];

        const sum = numbers.reduce(
          (accumulator, number, index, array) => {
            console.log(`Using array: ${array}`);
            console.log(`Current sum: ${accumulator}`);
            console.log(`Adding ${number} from index ${index}\n`);
            return accumulator + number;
          }, 0 
        );

        console.log(`Current sum: ${sum}`);
    }

    const example8 = () => {
        // Spread operator

        let array1 = [1, 2, 3];
        let array2 = [4, 5, 6];

        let combined = [...array1, ...array2 ];
        console.log(combined);

        // Destructuring
        let array = ["apple", "banana", "cherry"];
        let [firstFruit, secondFruit] = array;

        console.log(firstFruit);
        console.log(secondFruit);
    }

    // example1();
    // example2();
    // example3();
    // example4();
    // example5();
    // example6();
    // example7();
    // example8();

    return (
        <>
        <header className="text-center py-5 bg-blue-500 text-white">
            <h1 className="text-4xl">My Responsive Webpage</h1>
        </header>
        
        <nav className="bg-blue-100 p-5 block sm:flex justify-between">
            <Link href="#" className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded">Home</Link>
            <Link href="#" className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded">About</Link>
            <Link href="#" className="block sm:inline-block m-2 p-2 bg-blue-500 text-white rounded">Contact</Link>
        </nav>
        
        <main className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-blue-500 rounded">Content 1</div>
            <div className="p-5 bg-blue-600 rounded">Content 2</div>
            <div className="p-5 bg-blue-700 rounded">Content 3</div>
            <div className="p-5 bg-blue-800 text-white rounded">Content 4</div>
        </main>
        </>
    )
}