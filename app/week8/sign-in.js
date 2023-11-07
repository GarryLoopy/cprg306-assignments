import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const Button = ( {contents, handler} ) => {

    let minimized = false;
    return (
        <button className="border pl-4 pr-4 pt-4 pb-4 rounded-lg text-gray-400 border-gray-800 
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

    const handleMinimize = () => {
        alert("Minimize");
    }

    return (
        <div className="pr-4 pl-4 border-b-2 border-gray-800">
            {
                !user && (
                    <div className="flex justify-center mt-3 mb-2 gap-4">
                        <Button contents="Sign in with GitHub" handler={handleSignIn} />
                        <Link href="week8/shopping-list" className="border pl-4 pr-4 pt-2 pb-2 rounded-lg text-gray-400 border-gray-800 
                            bg-gray-950 hover:bg-gray-800 hover:border-gray-700 hover:cursor-pointer 
                              hover:text-white active:bg-slate-700">
                            <p className="pt-2">
                                No <span className="text-xs">(Go to page without signing in)</span>
                            </p>
                        </Link>
                    </div>
                )
            }
            {
                user && (
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-4 border-gray-800 border p-3 rounded-xl bg-gray-950 mt-2 mb-2">
                            
                            <img src={user.photoURL} className="w-8 h-8 rounded-full mt-auto mb-auto" alt="User image"/>
                            <div className="mt-auto mb-auto">
                                <p className="text-sm">{user.displayName}</p>
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