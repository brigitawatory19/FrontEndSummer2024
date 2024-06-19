// //Rest & Spread Operator

// //Rest Parameter
// const foo = (...params) => {
//     console.log(params);
//   };
  
//   foo("A", "B", "C","D","E"); // Output: ["A", "B", "C"]

//   //Spread Operator
//   const numbers = [1, 2, 3, 4, 5]
//   console.log(numbers);
//   console.log(...numbers)
//  //1. duplikasi array
//   const numbers2 = [numbers]
//   console.log(numbers2)
// //2. menggabungkan array
// let array1 = ["foo", "bar"]
// let array2 = ["fizz", "buzz"]

// let combinedArray5 = array1.concat(array2);
// let combinedArray6 = [...array1, ...array2]

// //Pada object
// let john = {
//     name: john
// }

// Destruturing Array & Object
let numbers = [1, 2, 3, 4, 5]

let [a, b, c, d, e] = numbers;
console.log(c);

