import { createContext, useContext } from "react";
const MyContext = createContext();

function MyComponent() {
    const contextValue = useContext(MyContext);
    return <div>{contextValue}</div>
}

export default function MyApp() {
    return(
        <MyContext.Provider value="Hello from context">
            <MyComponent />
        </MyContext.Provider>
    )
}