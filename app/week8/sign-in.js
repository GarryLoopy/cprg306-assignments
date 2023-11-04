import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page";

const Button = ( {contents, handler} ) => {
    return (
        <button className="border p-4 rounded-lg text-gray-400 border-gray-800 
            bg-gray-950 hover:bg-gray-800 hover:border-gray-700 hover:cursor-pointer 
            hover:text-white active:bg-slate-700"
                onClick={handler}>
                {contents}
        </button>
    )
}

export default function SignIn() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="p-4 border-b-2 border-gray-800">
            {
                !user && (
                    <div className="flex justify-center mt-2 mb-2">
                        <Button contents="Sign in with GitHub" handler={handleSignIn} />
                    </div>
                )
            }
            {
                user && (
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-4 border-gray-800 border p-4 rounded-xl bg-gray-950 mt-auto mb-auto">
                            <img src={user.photoURL} className="w-10 h-10 rounded-full"/>
                            <div>
                                <p className="text-md">{user.displayName}</p>
                                <p className="text-xs text-gray-400">{user.email}</p>
                            </div>
                        </div>
                        <div className="mt-auto mb-auto">
                            <Button contents="Sign out" handler={handleSignOut} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}