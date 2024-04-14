// console.log("hellow world");
// let radius=prompt("please enter radius of a circle");
// const PI=3.415;
// let area=PI*(radius**2);
// alert(area)
// let height=prompt("please enter your height in inches")
// let weight=prompt("please enter your weight in puonds")
// let BMI=(weight*703)/(height**2);
// alert(BMI)
// let year=prompt("enter your date of birth");
// let age=(2024-year);
// alert(age);
// let a=10
// let b=20
// let c=a;
// a=b; b=c;
// alert(b);
// alert(a);
// let value=prompt("enter your value");
// let number=prompt("enter your number");
// let sum=parseInt(value)+parseInt(number);
// alert(sum);
//  let age1=prompt("enter the age of first student");
//  let age2=prompt("enter the age of second student");
//  let age3=prompt("enter the age of second student");
//  let age4=prompt("enter the age of fourth student");
//  let age5=prompt("enter the age of fifth student");
//  let age6=prompt("enter the age of sixth student");
//  let age7=prompt("enter the age of seven student");
//  let age8=prompt("enter te age of eight student");
//  let age9=prompt("enter the age of nine student");
//  let age10=prompt("enter the age of ten student");
//  let average=(parseInt(age1)+parseInt(age2)+parseInt(age3)+parseInt(age4)+parseInt(age5)+parseInt(age6)+parseInt(age7)+parseInt(age8)+parseInt(age9)+parseInt(age10))/10;
//  alert(parseInt(average));
// const name = "ayesha";
// const age = 20;

// concatenation
// console.log("my name is " + name + " and i am " + age);
// template string
// console.log();
// let radius = prompt("enter the radius");
// let diameter = radius * 2;
// // c=2*pi*r
// let circumfrance = 2 * Math.PI * radius;
// // a=PI*r**2
// let area =  Math.PI * radius ** 2;
// console.log(radius);
// console.log(diameter);
// console.log(circumfrance);
// console.log(area);

// quatations
// let word=("My self samaha ayesha   ");
// console.log(word.length);
// console.log(word.toUpperCase());
// console.log(word.toLowerCase());
// console.log(word.trim());
// console.log(word.indexOf("a"));
// console.log(word.slice(7,15));
// console.log(word.replace("My","hy"));
// const name="ayesha";
// const age=20;
// console.log("my name"+name+age);
// console.log("he said i am not going")









// // assigment 1
// function lifePhase(age) {
// if (age>0 && age<= 3) {
//     return "baby";
//   }
// else if(age>=4 && age<=12) {
//     return "child";
//   }
//  else if(age>=13 && age<=19) {
//     return "teen";
//   }
//  else if(age>=20 && age<=64) {
//     return "adult";
//   }
//  else if(age>=65 && age<=140) {
//     return "senior citizen";
//   }
//   else{
// return "this is not a valid age"  }
// }

// // assigment 2
// function finalgrade(a, b, c ){
//   grade =( a + b + c )/ 3;
// if ((grade >= 90) & (grade <= 100)) {
//     return "your grade is A";
//   }
//  else if ((grade >= 80) & (grade <= 89)) {
//     return "your grade is B";
//   }
//   else if ((grade >= 70) & (grade <= 79)) {
//     return "your grade is C";
//   }
// else if ((grade >= 60) & (grade <= 69)) {
//     return "your grade is D";
//   }
//   else if ((grade >=0)&(grade<=59)){
//     return "your grade is F";
//   }
//   else {
//     "you ave entered an invalid grade"
//   }
// }

// // assigment 3
// function colorMessage(favoritecolor,shirtcolor){
//     if (favoritecolor==shirtcolor){
//       return  "the shirt is your favorite color"
//     }
//     else
//        { return "this is a nice color"}
    
// }

// // assigment 4
// function isEven(number){
//     if (number%2==0){
//         return "true"
//     }
//     else{
//         return "false"
//     }
// }
// assigment 5
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// // 1. Remove the Banana from the array.
// array.shift();

// // 2. Sort the array in order.
// array.sort();

// // 3. Put "Kiwi" at the end of the array.
// array.push("Kiwi");

// // 4. Remove "Apples" from the array.
// array.splice(array.indexOf("Apples"), 1);

// // 5. Sort the array in reverse order.
// array.reverse();

// console.log(array); // Output: ["Kiwi", "Oranges", "Blueberries"]

// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// var oranges = array2[1][1][0];
// console.log(oranges); // Output: "Oranges"

// // assigment 6
// function multiply(first,second){
//     return first*second
// } 
// // assigment 7
// function returnDay(number){
//     if(number==1){
//     return "Monday"}
    
// else if(number==2){
// return "Tuesday"
//     }
// else if(number==3){
//     return "wednesday"
// }
// else if(number==4){
//     return "Thursday"
// }
// else if(number==5){
//     return "friday"
// }
// else if(number==6){
//     return "saturday"
// }
// else if(number==7){
//     return "sunday"
// }

// }

// // assigment 8 
// function capitalize (string){
//     let capitalize=(string.slice(0,1).toUpperCase())
//     let remaining=(string.slice(1))
//     console.log(`${capital}${remaining}`)
// }

// // assigment 9
// // PART 1
// const word = "supercalifragilisticexpialidocious";

// // For loop
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// // While loop
// let index = 0;
// while (index < word.length) {
//     console.log(word[index]);
//     index++;
// }

// // PART 2
// // While loop for even numbers from 100 to 140
// let number = 100;
// while (number <= 140) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number++;
// }

// // For loop with range
// for (let num = 100; num <= 140; num++) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// // PART 3
// let passphrase = "";
// while (passphrase !== "sillygoose") {
//     passphrase = prompt("Please enter the passphrase 'sillygoose':");
// }
// // assigment 10
// // PART 1
// function contains_pickle(...args) {
//     return args.includes("pickle");
// }

// // Test cases
// console.log(contains_pickle("red", 45, "pickle", []));  // true
// console.log(contains_pickle(1, 2, "blue"));  // false

// // PART 2
// function count_fails(...args) {
//     return args.filter(score => score <= 50).length;
// }

// // Test cases
// console.log(count_fails(99, 48, 79, 36));  // 2
// console.log(count_fails(85, 78, 91));  // 0
// console.log(count_fails(50, 41, 47, 74, 76, 81));  // 3

// // PART 3
// function get_top_students(...args) {
//     return args.filter(([name, score]) => score >= 90).map(([name]) => name);
// }

// // Test cases
// console.log(get_top_students(["tim", 91], ["stacy", 83], ["carlos", 97], ["jim", 69]));  // ['tim', 'carlos']
// console.log(get_top_students(["colt", 61], ["elton", 76]));  // []
// console.log(get_top_students(["kitty", 80], ["blue", 95], ["toad", 91]));  // ['blue', 'toad']

// // assigment 11
// function sumArray(arr) {
//   // Initialize a variable to store the sum
//   let sum = 0;

//   // Loop through each element in the array
//   for (let num of arr) {
//     // Add the current element to the sum
//     sum += num;
//   }

//   // Return the final sum
//   return sum;
// }

// // Example usage:
// console.log(sumArray([1, 2, 3]));       // Output: 6
// console.log(sumArray([2, 2, 2, 2]));     // Output: 8
// console.log(sumArray([50, 50, 1]));     // Output: 101

// // assigment 12
// function reverseArray(arr) {
//   // Create a new empty array to store the reversed elements
//   const reversedArr = [];

//   // Loop through the original array in reverse order (starting from the last element)
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // Push each element from the original array to the new reversed array
//     reversedArr.push(arr[i]);
//   }

//   // Return the new reversed array
//   return reversedArr;
// }

// // Example usage:
// const sentences = ['sense', 'make', 'all', 'will', 'this'];
// const reversedSentences = reverseArray(sentences);

// console.log(sentences);  // Output: ['sense', 'make', 'all', 'will', 'this'] (original array remains unchanged)
// console.log(reversedSentences);  // Output: ['this', 'will', 'all', 'make', 'sense'] (reversed array)

// // assigment 13
// function greetAlien(alienNames) {
//   // Loop through each alien name in the array
//   for (const alienName of alienNames) {
//     // Construct the greeting message
//     const greeting = `Oh powerful ${alienName}, we humans offer our unconditional surrender!`;

//     // Print the greeting message to the console
//     console.log(greeting);
//   }
// }

// // Example usage:
// const alien = ["blorgous", "glamyx", "wegord", "spaceking"];
// greetAlien(alien);













