import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount((prevCount) =>  prevCount + 1);
    }

    return { count, increment };
}

function CounterComponent() {
    const { count, increment } = useCounter();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}