// Module in JS
// console.log("Module in JS")
// import greetings from "./greetings.js";
// import { name } from "./utils.js";
// import Hello from "./greetings.js";

// console.log(name)
// console.log(numbers)
// console.log(sayHallo)
// console.log(greetings)

//Asynchronous JS
//Asynchronous/Single Thread
//Ada dua Async 
//1. paralel
// setTimeout(() => {
//     console.log("proses 1");
// }, 5000);
// setTimeout(() => {
//     console.log("proses 2");
// }, 5000);
// setTimeout(() => {
//     console.log("proses 3");
// }, 3000);
// setTimeout(() => {
//     console.log("proses 4");
// }, 5000);

// //Concurent
// //1.Callback
// setTimeout(() => {
//     console.log("proses 1")
//     setTimeout(() => {
//         console.log("proses 2")
//         setTimeout(() => {
//             console.log("proses 3")
//             setTimeout(() => {
//                 console.log("proses 4")
//             }, 5000)
//         }, 5000)
//     },3000)
// },5000)

//Promise
//1. Buat promise
// let newPromise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// })

// //2. menggunakan/consume promise
// //a. then - catch
// newPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(erroe));
// //b. async - await
// // cat: wajib membuat fungsi
// const getData = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     } catch (erroe) {
//         console.log(error);
//     }
// };
// getData();

//Fetch
fetch ("https://jsonplaceholder.typicode.com/users")
 .then((response) => response.json())
 .then((json) => console.log(json))
 