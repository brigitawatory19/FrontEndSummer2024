// Array & Objek
//Deklarasi Array
// cara 1. Array Literal
// let numbers = [1,2,3,4,5];
// // cara 2. Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);

//tipe data dalam Array
let numbers = [1,2,3,4,5]; //numbers
let student = ["JOhn","Jane","Bob"]; //string
let john = ['john', 30, true];//campuran

console.log(numbers);
console.log(student);
console.log(john);

// mengakses elemen di dalam Array 
// melalui index
console.log(numbers[3]); //4
console.log(student[1]); //Jane
console.log(john[3]) // [80, 90, 100]
console.log(john[3][1]) // 90

numbers[3] = 100;
console.log(numbers);

//Array length
console.log(numbers.length); //5
console.log(student.length); //3

//mengakses element terakhir
console.log(numbers[numbers.length - 1]);

//Array Method
// Mengubah Array menjadi string
let array = [1, 2, 3, "hallo", false, true];
console.log(array);
console.log(array.toString);
console.log(array.join("-"))

//mengeluarkan element terakhir
array.pop();
console.log(array)

//menambah element di bagian akhir
array.push("Selamat pagi");
console.log(array);

//menghapus element pertama
array.shift();
console.log(array);

//menambah element pertama
array.unshift("selamat pagi");
console.log(array);

//mengahapus element bagian tengah
//splice
array.splice(4, 0, 4, 5)
console.log(array)

//menggabungkan array menggunakan concat
let buah = ["pisang", "apel", "jeruk"]
let sayur = [""]

//Object
//Deklarasi Object
// cara 1. Object literal
let john = {
    firstaName: 'john', 
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
};
console.log(john);

//cara 2. menggunakan kata kunci new
let orang = new Object();

//2 cara mengakses properti di dalam object
// 1. not notation
console.log(john.firstaName)

//2. Bracket notation
console.log(john["isMarried"]);

