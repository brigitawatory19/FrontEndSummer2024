// IIFE & Callback Function
(function (){
    console.log("Hello IIFE")

})()

//Callback Function
// function greetings(){
//     console.log('Hello')
// }

// function sayHello(callback){
//     callback()
// }

// sayHello(greetings())

BMI = berat / (tinggi * tinggi)
 function calculateBMI(berat, tinggi){
    let bmi = berat / (tinggi * tinggi)
     let classification;
     if (bmi < 18.5) {
         classification = 'Underweight'
     } else if(bmi >= 18.5 && bmi < 24.9){
         classification = 'Normal Range'
     } else if (bmi >= 25){
         classification = 'Overweight'
     } else if (bmi > 25 && bmi <= 29.9){
         classification = 'Pre obese'
     } else {
         classification = 'Obese'
     }
     return classification
 }

let output = calculateBMI(90, 1.7)
 console.log('Clasifikasi BMI anda adalah ' + output)
