// "use client";

// import MyApp from "./myapp"

// function Card({ children }) {
//     return <div className="border">{children}</div>
// }

// export default function Page() {
//     return (
//         <main>
//             <h2 className="text-2xl text-center">Week 8 lecture</h2>
//             <Card>
//                 <h1>Hello</h1>
//                 <p>Welcome to my app</p>
//             </Card>

//             <MyApp />
//         </main>
//     )
// }
"use client";

import { useContext, useState } from "react";

// Create an Auth context
const AuthContext = React.createContext();

// Create a custom hook that uses the Auth context
function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}

// Create a Provider component for the Auth context
function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    const login = (username, password) => {
        // Logic to authenticate user and set current user
    };

    const logout = () => {
        // Logic to log out user and unset current user
    }

    const value = {
        currentUser,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export  {useAuth, AuthProvider }