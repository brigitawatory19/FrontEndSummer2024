//Array Exercise
// let people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// people.forEach(function (persen) {
//     console.log(persen);
// });

// people.shift();
// console.log(people);

// people.pop();
// console.log(people);

// people.unshift("Matt");
// console.log(people);

// people.push("Brigita");
// console.log(people);

// for (let i = 0; i < persen.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Mary") {
//         break
//     }
// }

// let copy = people.slice(2);

// people.splice(2, 1, "Elizabeth", "Artie");

// let withBob = people.concat("Bob");


//Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
programming["difficulty"] = 7;
delete programming.jokes;
programming.isFun = true;
let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
});
console.log(updatedLanguages);
