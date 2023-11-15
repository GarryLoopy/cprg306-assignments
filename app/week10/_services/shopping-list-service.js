import { db } from "../_utils/firebase";

import { 
    collection, 
    getDocs, 
    addDoc, 
    query, 
    doc ,
    deleteDoc
} from "firebase/firestore"; 


export const getShoppingList = async (userId) => {
    const q = query(
        collection(db, "users", userId, "items")
    );

    const querySnapshot = await getDocs(q);

    let items = [];
    querySnapshot.forEach(
        (doc) => {
            items.push( 
                {
                    documentID: doc.id,
                    data: doc.data() 
                }
            )
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

export const deleteItem = async (userId, documentId) => {
    const docRef = doc(db, "users", userId, "items", documentId);
    await deleteDoc(docRef);
}