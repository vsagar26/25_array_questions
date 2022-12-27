// Question 1 Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

/*var string = ["Ram", "Shyaam", "Arjun", "Veer"];    String data type
var number = [1,2,3,45,67];                         Number data type
var boolean = [True, False];                        Boolean data type*/
// null = The variable which contain nothing
// undefined = The variable which has not been assigned any value

// Question 2 Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// let firstName = "Vidya";
// let lastName = "Sagar";
// let maritalStatus = "Unmarried";
// let country = "India";
// let age = 24;

// console.log(
//   `My name is  ${firstName} ${lastName} and I'm ${age} years old living in ${country} and currently ${maritalStatus}`
// );

// Question 3 Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// let myName = "vidyasagar";
// console.log(myName.toUpperCase());

// Question 4 Check if the string contains a word Script using includes() method.


//  let sentence = "JavaScript is a scripting language";
//  let word = "script";
//  console.log(sentence.includes(word));

// Question 5 Split the string into an array using split() method.

// let sentence = "Good Morning";
// console.log(sentence.split(""));

// Question 6 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let sentence = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(sentence.split(","));

// Question 7 Use lastIndexOf to determine the position of the last occurrence of a script.

// let sentence = 'The quick brown fox jumps over the lazy dog';
// let word = 'dog';
// console.log(sentence.lastIndexOf(word));

// Question 8 Use search to find the position of the first occurrence of the word 'because' in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

// let sentence = 'You cannot end a sentence with because because because is a conjunction';
// let word = "because";
// console.log(sentence.indexOf(word));

// Question 9 Use trim() to remove any trailing whitespace at the beginning and the end of a string.

// let sentence = "    The quick brown fox jumps over the lazy dog   ";
// console.log(sentence.trim(" "));

// Question 10 Boolean value is either true or false.
   // - Write three JavaScript statement which provide truthy value.
   // - Write three JavaScript statement which provide falsy value.

// Truthy statement
   // let checkifTrue = 5>2;
// console.log(checkifTrue);

// let checkifTrue = 3<8;
// console.log(checkifTrue);

// let checkifTrue = 9>4
// if(checkifTrue= true){
//     console.log("It is true statement")
// }

// let checkifFalse = 6>7;
// console.log(checkifFalse);

// let checkifFalse = 3>6;
// console.log(checkifFalse);

// let checkifTrue = 2>4
// if(checkifTrue= true){
//     console.log("It is false statement")
// }

// Question 11 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    // - 4 > 3
    // - 4 >= 3
    // - 4 < 3
    // - 4 <= 3
    // - 4 == 4
    // - 4 === 4
    // - 4 != 4
    // - 4 !== 4
    // - 4 != '4'
    // - 4 == '4'
    // - 4 === '4'
    

// let abc = - 4 > 3;
// console.log(abc);

// let abc =  - 4 >= 3;
// console.log(abc);

// let abc = - 4 < 3;
// console.log(abc);

// let abc = - 4 <= 3;
// console.log(abc);

// let abc = - 4 == 4;
// console.log(abc);

// let abc =  - 4 === 4;
// console.log(abc);

// let abc = - 4 != 4;
// console.log(abc);

// let abc = - 4 !== 4;
// console.log(abc);

// let abc =  - 4 != '4';
// console.log(abc);

// let abc = - 4 == '4';
// console.log(abc);

// let abc = - 4 === '4';
// console.log(abc);

// Question 12 Use the Date object to do the following activities
    // - What is the year today?
    // - What is the month today as a number?
    // - What is the date today?
    // - What is the day today as a number?
    // - What is the hours now?
    // - What is the minutes now?
    // - Find out the numbers of seconds elapsed from January 1, 1970 to now.



// var abc = new Date();
// console.log(abc.getFullYear());
// console.log(abc.getMonth());
// console.log(abc.getDate());
// console.log(abc.getDay())
// console.log(abc.getHours());
// console.log(abc.getMinutes())
// console.log(abc.getTime());



// Question 13  Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).


// let height = prompt("Enter the height");
// let base = prompt("Enter the base");

// let area = 0.5*height*base;
// console.log(area);

// Question 14 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// let c1 = [6, 10];

// let finalc = c1.map(x=>x-2);
// let slope = finalc[1]/finalc[0];
// console.log(slope);

// Question 15 Calculate the slope, x-intercept and y-intercept of y = 2x -2


// Ques 16 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let radius = prompt("Enter Radius");

// let area = 3.14*radius*radius;
// let circumference = 2*3.14*radius;
// console.log(area);
// console.log(circumference);

// Question 17 Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

//    let calender = new Date();
//    let year = calender.getFullYear();
//    let month = calender.getMonth();
//    let date = calender.getDate();
//    let hours = calender.getHours();
//    let minutes = calender.getMinutes();
//    console.log(year);
//    console.log(month);
//    console.log(date);

//    let abc = new Date().toISOString();
//    console.log(abc);

// Ques 18 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//  let age = prompt("Enter your age:");

//  if (age >= 18){
//     console.log("You are eligibe to drive")
//  }
//  else{
//     console.log("Yor are not eligibe to drive")
//  };

// Ques 19 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let number = prompt("Enter any number to check if it is even or not");

// if (number%2 == 0){
//     console.log(`${number} is even`)
// }
// else{
//     console.log(`${number} is odd`)
// };

// Ques 20 Write a code which can give grades to students according to theirs scores:
    // - 80-100, A
    // - 70-89, B
    // - 60-69, C
    // - 50-59, D
    // - 0-49, F

// let grade = prompt("Enter percentage");

// Method 2

// if(grade>=80){
//     console.log("Grade A")
// }
// else if(grade>=70){
//     console.log("Grade B")
// }
// else if(grade>=60){
//     console.log("Grade C")
// }
// else if(grade>50){
//     console.log("Grade D")
// }
// else{
//     console.log("Grade E")
// };

// Method 2

// if(grade<50){
//     console.log("Grade E")
// }
// if(grade<60 && grade>50){
//     console.log("Grade D")
// }
// if(grade<70 && grade>60){
//     console.log("Grade C")
// }
// if(grade<80 && grade>70){
//     console.log("Grade B")
// }
// if(grade<100 && grade>80){
//     console.log("Grade A")
// }

// Ques 21 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // - September, October or November, the season is Autumn.
    // - December, January or February, the season is Winter.
    // - March, April or May, the season is Spring
    // - June, July or August, the season is Summer

// let weatherCheck = prompt("Enter Month Name");
// if((weatherCheck === 'September')||( weatherCheck ==='October') ||(weatherCheck ==='November')){
//     console.log("Season is Autumn")
// }
// else if((weatherCheck==='December')|| (weatherCheck ==='January')||(weatherCheck ==='February')){
//     console.log("Season is winter")
// }
// else if((weatherCheck==='March') ||(weatherCheck ==='April')||(weatherCheck ==='May')){
//     console.log("Season is Spring")
// }
// else if ((weatherCheck==='June') ||(weatherCheck ==='July')||(weatherCheck ==='August')){
//     console.log("Season is Summer")
// };


// Ques 22 Write a program which tells the number of days in a month.


// function getDaysInMonth (month, year){
//  return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(5, 2012));

// Ques 23 Write a program which tells the number of days in a month, now consider leap year.

// function getDaysInMonth (month, year){
//  return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(2, 2023));

// Ques 24(30) Write a script which generates a random hexadecimal number.

// function randomHexaNumber(){
//     let random = '';
//     let number = '0123456789'
//     for(i=0; i<6; i++){
//         random = random + number[Math.floor(Math.random()*number.length)]
//     }
//     return random;
// }
// console.log(randomHexaNumber())

// Ques 25(28) Use for loop to iterate from 0 to 100 and print only prime numbers


// for (var counter = 0; counter <= 100; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }