"use client";

import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from "./shopping-list/page"
import SignIn from "./sign-in";

import { getShoppingList, addItem} from "./_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  const getItems = async () => {
    const data = await getShoppingList(user.uid);

    console.log(data);
  }

  const addRandomItem = async () => {
    const item =     {
      id: "2KJH3k2j3H1k2J3K1H",
      name: "bread 🍞",
      quantity: 2,
      category: "bakery"
    }

    const docId = addItem(user.uid, item);
    console.log("Successfully added item");
  }

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