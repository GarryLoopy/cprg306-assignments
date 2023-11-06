
// Create
// import { collection, addDoc } from "firebase/firestore";

// const decRef = await addDoc(collection(db, "users", "user1", "items"), {
//     name: "Milk 🥛",
//     quantity: 1,
//     category: "Dairy",
// })

// Read
// import { doc, getDoc } from "firebase/firestore";

// const docRef = doc(db, "users", "user1", "items", "item1_1");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists())
//     console.log("Item data: ", docSnap.data());
// else 
//     console.log("No such item!");

// Read multiple
// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(
//     collection(db, "users", "user1", "items"),
//     where("quantity", ">", 1)
// );
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach(
//     (doc) => console.log(doc.id, " => ", doc.data())
// );

// Update
// import { doc, updateDoc } from "firebase/firestore";

// const docRef = doc(db, "users", "user1", "items", "item1_1");
// await updateDoc(docRef, {
//     quantity: 12,
// })

// Delete
// import { doc, deleteDoc } from "firebase/firestore";

// const docRef = doc(db, "users", "user1", "items", "item1_1");
// await deleteDoc(docRef);

// Real-time updates
// import { collection, doc, onSnapshot } from "firebase/firestore";

// const colRef = collection(db, "users", "user1", "items");
// const unsubscribe = onSnapshot(colRef, (snapshot) => {
//     snapshot.forEach(
//         (doc) => console.log(doc.id, " => ", doc.data())
//     )
// });
// unsubscribe();


export default function Page() {
    return (
        <main>
            
        </main>
    )
}