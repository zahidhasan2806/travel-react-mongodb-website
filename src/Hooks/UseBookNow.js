// import React, { useEffect, useState } from 'react';
// import UseAuth from './UseAuth';

// const UseBookNow = () => {
//     const { user } = UseAuth();
//     const { email } = user;

//     const [myPackages, setMyPackages] = useState([]);
//     useEffect(() => {
//         fetch(`http://localhost:5000/orders/${email}`)
//             .then(res => res.json())
//             .then(data => setMyPackages(data));
//     }, [email]);

//     const addToMyPackage = (item) => {
//         const isAdded = myPackages.find(
//             (myPackage) => myPackage._id === item._id)
//         if (isAdded) {
//             alert("course has been selected!");
//         } else {
//             fetch("http://localhost:5000/orders/add", {
//                 method: "post",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify(item),
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     if (data.insertedId) {
//                         const newSelection = [...myPackages, item];
//                         setMyPackages(newSelection);
//                     }
//                 });
//         }
//     }
//     return { myPackages, setMyPackages, addToMyPackage };
// };

// export default UseBookNow;