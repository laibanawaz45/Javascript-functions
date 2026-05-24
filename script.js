
/*1. Write a function that displays current date & time in your browser.
function ShowTime(){
    var now = new Date();
    var date = now.getDate
    var hours = now.getHours();
    var minutes = now.getMinutes();
    console.log("current hour:", hours ,"current minutes:", minutes);
    
}
ShowTime()*/





/*2. Write a function that takes first & last name and then it greets the user using his full name.
function data(){
    console.log("congratulations on using your full name :",firstName,LastName);
    
}
firstName = prompt("enter your first name");
LastName = prompt("enter your last name");
data(firstName,LastName)*/






/* 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function sum(num1,num2){
    console.log(num1 + num2);
    
}
sum(10,20)*/







/* 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function calculator(num1,num2,oprator){
    if (operator === "+"){
        console.log(num1 + num2);
        
    }else if (operator === "-" ){
        console.log(num1 - num2 );
        
    }else if (operator === "/"){
        console.log(num1 / num2);
        
    }else (num1 * num2)

}
num1 = +prompt("enter num1");
num2 =+ prompt("enter num2");
operator = prompt ("enter operator");
calculator(num1,num2,operator)*/





/* 5. Write a function that squares its argument.
function square(num){
    return num * num ;
}
var result = square(5);
console.log(result);
*/






/* 6. Write a function that computes factorial of a number.
function fractorial (num){
    var result = 1;
    for (var i =1 ; i <= num ; i++){

        result = result * i
    }
    return result;
}
usernum =+prompt("enter your number")
console.log(fractorial(usernum));*/





/* 7. Write a function that take start and end number as inputs & display counting in your browser.

function counting(start,end){
    
    for (var i = start; i <=end; i++) {
        console.log(i);
        
    }
}
 var startnum =+prompt("enter your start number");
var endnum =+prompt("enter your end number");
counting (startnum,endnum);*/




/* 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
function calculateHypotenuse(base, perpendicular) {

    function square(num) {
        return num * num;
    }

    var hypotenuse = Math.sqrt(square(base) + square(perpendicular));

    return hypotenuse;
}

console.log(calculateHypotenuse(3, 4));*/




/*9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value

function area (width , height){
    return width * height
}
console.log(area(5,10));

ii. Arguments as variables
function AreaOfRectangle(width, height){
    return width * height;
    
    }
    
    var h = 5;
    var w = 10;
    console.log(AreaOfRectangle(w,h));
    
    
    */




/*   10. Write a JavaScript function that checks whether a passed string is palindrome or not?
 A palindrome is word, phrase, or sequence that reads the same backward as
 forward, e.g., madam.

function checkPalindrome(word) {

    var reversed = "";

    for (var i = word.length - 1; i >= 0; i--) {
        reversed = reversed + word[i];
    }

    if (word === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }

}

var userWord = prompt("Enter a word");

checkPalindrome(userWord);
*/






/* 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'
    

function titleCase(str) {

    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {

        words[i] =
            words[i][0].toUpperCase() +
            words[i].slice(1).toLowerCase();

    }

    return words.join(" ");
}

var userInput = prompt("Enter a sentence");

console.log(titleCase(userInput));
*/




/* 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'


function longestWord(str) {

    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {

        if (words[i].length > longest.length) {
            longest = words[i];
        }

    }

    return longest;
}

var userInput = prompt("Enter a sentence");

console.log(longestWord(userInput));
*/






/*function countLetter(str, letter) {

    var count = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i] === letter) {
            count++;
        }

    }

    return count;
}

var userString = prompt("Enter a string");
var userLetter = prompt("Enter a letter");

console.log(countLetter(userString, userLetter));*/







/*function calcCircumference(radius) {

    var circumference = 2 * Math.PI * radius;

    console.log("The circumference is " + circumference);

}

function calcArea(radius) {

    var area = Math.PI * radius * radius;

    console.log("The area is " + area);

}

calcCircumference(7);
calcArea(7);*/