import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore"; 

// The data in Cloud Firestore will have the following structure.

//     users collection
//         userId document
//             items subcollection
//                 itemId document


export const getShoppingList = async (userId) => {
    const q = query(
        collection(db, "users", userId, "items")
    );

    const querySnapshot = await getDocs(q);

    let items = [];
    querySnapshot.forEach(
        (doc) => {
            items.push( doc.data() )
        }
    )

    return items;
}

export const addItem = async (userId, item) => {
    const docRef = await addDoc(
        collection(db, "users", userId, "items"), item
    )

    return docRef.id;
}