

// wap to add two numbers

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(10,4)

// function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(10,4)

// console.log("Result: ",result)


// wap to reverse a Number

// let number = "1234556790";

// function reverseNumber(num) {
//     let reversed = "";

//     for(let i = num.length-1; i >= 0; i--) {
//         reversed = reversed + num[i];
        
//     }
//     return reversed;
// }

// console.log(reverseNumber(number));



//wap to find factorial of a number

// let factorial = (num1) => {
//     let fact = 1;
//     for (let i = 1; i <= num1; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log("Factorial of given number is " + factorial(5));


// wap to check if a number is prime or not

// function isPrime(n) {
//     if (n==2){
//         console.log(`${n} is a prime number`)
//     }
//     let result;
//     for(let i=2; i<n ; i++){
//         if(n%2==0){
//             result = `${n} is not a prime number`
//             break;
//         }else{
//             result = `${n} is a prime number`
//         }
//     }
//     return result
// }

// let p= isPrime(9)
// console.log(p)



// Write a function to find the sum of digits of a number.

// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10; 
//         num = Math.floor(num / 10); 
//     }
//     return sum;
// }

// console.log(sumOfDigits(1245687644)); 
// console.log(sumOfDigits(1402)); 



// write a function to check wether a number is armstrong number or not

function isAmsterdamNumber(num) {
    let str = num.toString();

    if (str.length % 2 !== 0) {
        return false;
    }

    let half = str.length / 2;

    let firstHalfSum = 0;
    for (let i = 0; i < half; i++) {
        firstHalfSum += parseInt(str[i]);
    }

    let secondHalfSum = 0;
    for (let i = half; i < str.length; i++) {
        secondHalfSum += parseInt(str[i]);
    }

    return firstHalfSum === secondHalfSum;
}

console.log(isAmsterdamNumber(1230));  
console.log(isAmsterdamNumber(1234));  
console.log(isAmsterdamNumber(451236)); 