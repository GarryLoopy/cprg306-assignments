// "use client";

// import { useState, useEffect } from "react";

// const example1 = () => {
//     //try catch

//     try {
//         NonExistentFunction();
//     } catch (exception) {
//         console.log(exception);
//         console.log(exception.message);
//     }
// }

// const example2 = () => {
//     let promise = new Promise(
//         (resolve, reject) => {
//             let condition = false;

//             if (condition) {
//                 resolve("Operation was successful");
//             } else {
//                 reject("Operation failed");
//             }
//         }
//     );

//     promise
//         .then(
//             (message) => {
//                 console.log(message);//Operation was successful
//             }
//         )
//         .catch(
//             (error) => {
//                 console.log(error); //Operation failed
//             }
//         );
// }

// const example3 = () => {
//     let promise = new Promise(
//         (resolve, reject) => {
//             let condition = true;

//             if (condition) {
//                 resolve("Operation was successful");
//             } else {
//                 reject("Operation failed");
//             }
//         }
//     );
    
//     const executeAsyncTask = async () => {
//         try {
//             const message = await promise;
//             console.log(message);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     executeAsyncTask();
// }

// const example4 = () => {
//     const getData = async () => {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error("Error: ", error);
//         }
//     }

//     getData();
// }

// const example5 = () => {
//     const postData = async () => {
//         try {
//             const response = await fetch("https://jsonplaceholder.typicode.com/posts",
//                 {
//                     method: "POST",
//                     body: JSON.stringify(
//                         {
//                             title: "foo",
//                             body: "bar",
//                             userId: 1
//                         }
//                     ),
//                     headers: {
//                         "Content-type": "application/json; charset=UTF-8",
//                     },
//                 }
//             );

//             const data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.error("Error: ", error);
//         }
//     }

//     postData();
// }

// const example6 = () => {
//     const start = async () => {
//         const data = await fetch("https://dog.ceo/api/breeds/image/random");
//         const result = await data.json();
//         console.log(result);
//     }

//     start();
// }

// export default function Page() {
//     const [resourceType, setResourceType] = useState('posts');
//     const [items, setItems] = useState([]);

//     useEffect(
//         () => {
//             fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//                 .then(response => response.json())
//                 .then(json => setItems(json))
//         }, [resourceType]
//     )

//     const handlePostsClick = () => setResourceType('posts');
//     const handleUsersClick = () => setResourceType("users");
//     const handleCommentsClick = () => setResourceType("comments");

//     return (
//         <main>
//             <h1 className="text-4xl text-center">Week 7</h1>
//             <div>
//                 <div className="flex gap-2">   
//                     <button onClick={handlePostsClick} className="bg-slate-800 p-4 hover:bg-slate-700">Posts</button>
//                     <button onClick={handleUsersClick} className="bg-slate-800 p-4 hover:bg-slate-700">Users</button>
//                     <button onClick={handleCommentsClick} className="bg-slate-800 p-4 hover:bg-slate-700">Comments</button>
//                 </div>

//                 <h1 className="ml-2 text-4xl">{resourceType}</h1>
//                 {
//                     items && items.map(
//                         (item) => {
//                             return <pre>{JSON.stringify(item)}</pre>
//                         }
//                     )
//                 }
//             </div>
//         </main>
//     );
// }





// "use client";

// import { useEffect, useState} from "react";

// export default function Page() {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//     }

//     useEffect(
//         () => {
//             window.addEventListener('resize', handleResize)

//             return () => {
//                 window.removeEventListener('resize', handleResize)
//             }
//         }, []
//     )

//     return (
//         <div>
//             {windowWidth}
//         </div>
//     )
// }

// "use client";

// import { useState, useEffect } from 'react';

// export default function PublicAPIs() {
//   const [apis, setApis] = useState([]);
//   const [error, setError] = useState(null);

//   async function fetchAPIs() {
//     try {
//       const response = await fetch('https://api.publicapis.org/entries');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setApis(data.entries);
//       setError(null);
//     } catch (e) {
//       setError(e.message);
//     }
//   }

//   useEffect(() => {
//     fetchAPIs();
//   }, []); // Run the effect only once after the initial render

//   if (error) return (
//     <div>
//       <h2>Public APIs:</h2>
//       <p>{error}</p>
//     </div>
//   );
  
//   return (
//     <div>
//       <h2>Public APIs:</h2>
//       {apis.length > 0 ? (
//         <ul>
//           {apis.map((api, index) => (
//             <li key={index}>
//               <a href={api.Link}>
//                 {api.API}
//               </a>
//               : {api.Description}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [weather, setWeather] = useState("");

    const fetchWeatherData = async () => {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=51.064&longitude=-114.08&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloudcover&timezone=auto"
        );

        const data = await response.json();
        return data;
    }

    const loadWeather = async () => {
        try {
            const data = await fetchWeatherData();
            setWeather(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(
        () => {
            loadWeather();
        }, 
    )
    return (
        <main>
            <p>
            Temperature:{" "}
            {temp !== null && temp !== undefined && tempUnit
                ? `${temp}${tempUnit}`
                : "unavailable"}
            </p>
            <p>
            Cloud cover:{" "}
            {cloudCover !== null && cloudCover !== undefined && cloudCoverUnit
                ? `${cloudCover}${cloudCoverUnit}`
                : "unavailable"}
            </p>
        </main>
    )
}