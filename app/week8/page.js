"use client";

import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page"
import SignIn from "./sign-in";

export default function Page() {
  const { user } = useUserAuth();

  return (
    <main className="flex flex-col bg-gray-900">

      <div>
        <SignIn />
      </div>
      <div>
        {
          user && (
            <ShoppingList />
          )
        }
      </div>
    </main>
  )
}