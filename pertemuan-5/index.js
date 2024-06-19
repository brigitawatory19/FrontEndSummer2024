//
const students = [
    {
        id: 1,
        name: "john",
        isActive: true,
        grade: 80,

    }
    {
        id:2,
        name: "jack",
        isActive: true,
        grade: 90,
    }
    {
        id: 3,
        name: "bob",
        isActive: false,
        grade: 75,
    }
];
//menampilkan elemen Array semuanya
console.log(students);
//menampilkan elemen array item by item
for(let i=0; i<students.length; 1++) {
    console.log(students[i]);
}

//array built-in method
//1. forEach
students.forEach(function (item) {
    console.log(item);
});

//2. array map
let output = students.map(function (item) {
    item.grade +=5;
    return item;
});
console.log(students);
console.log(output);

const array1 = [1,4,9,16];
//function to map
const map1 = array1.map

//Filter

let filteredStudent = student.filter(function (item) {
    return item.isActive === true;
});

console.log(filteredStudent)

//find
let findStudent = student.find(function (item) {
    return item.isActive === true;
});

console.log(findStudent)