function menghitungBMI(berat, tinggi) {
    const bmi = berat / (tinggi * tinggi);
    return bmi;
}
let output = menghitungBMI (58, 1.5)
console.log(output);