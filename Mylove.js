//var, let, const, 
//var greeting = "Hello World";
//const pi = 3.14;
let myNumber = 42;
let mySecondNumber = 100;
let sum = myNumber + mySecondNumber;
var age = 30;
age = 31; // var allows reassignment
//var name = "Alice";
//console.log(greeting);
//console.log(pi);

//var array = [1, 2, 3, 4, 5];
//var fruits = ["apple", "banana", "cherry", "mango"];{ // var allows redeclaration
//loop through the array and print each element
//for (let i = 0; i < array.length; i++) 

  //  console.log(fruits[3]);
//}

//let number = 2,10,7,12,30,5,8,15,20,25,50,100,200,500,1000; // let allows block scope,
//let digits = number.split('') .map(number);
//for (let i = 0; i < digits.length; i++) {
//for (let j = 0; j < digits.length; j++){
//if (digits[i] < digits[j]) {
//let temp = digits[i];
//digits[i] = digits[j];
//digits[j] = temp;//}
//}//}

//console.log(diigits.join(''));
//console.log("Name: " + name + ", Age: " + age + ", Sum: " + sum);

let num = "245317689";

let digits = num.split('').map(Number);

for (let i = 0; i < digits.length - 1; i++) {
    for (let j = 0; j < digits.length - 1 - i; j++) {
        if (digits[j] > digits[j + 1]) {
            let temp = digits[j];
            digits[j] = digits[j + 1];
            digits[j + 1] = temp;
        }
    }
}

console.log(digits.join(''));