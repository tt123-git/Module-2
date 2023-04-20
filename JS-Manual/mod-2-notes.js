// How to Declare Variables in JS

let message; // Variable declaration
message = 'Hello!'; // Assigning a value to a variable
alert(message); // shows the variable content

// Operators
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

let a = 1, b = 2;
alert(a + b); // answer will be 3

let c = 2, d = 3;
alert(c * d); // answer will be 6

let e = 6, f = 3;
alert(e / f); // answer will be 2

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2

alert( 2 ** 3 ); // 2³ = 8

alert( '24' + 2 ); // "242"

// Working w/ Numbers
/*
NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number): */

// Working w/ Strings
/*
Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:
*/
const bigmouth = 'I\'ve got no right to take my place…';
alert(bigmouth);
/*
A template literal looks just like a normal string, but instead of using single or double quote marks (' or "), you use backtick characters (`):
*/
const greeting = `Hello`;

//slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
alert(part);

/*
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
*/

let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 13);
alert(part1);
/*
The replace() method replaces a specified value with another value in a string: */

let text2 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
alert(newText);
// A string is converted to upper case with toUpperCase():

let text1 = "Hello World!";
let text3 = text1.toUpperCase();
alert(text3);

// A string is converted to lower case with toLowerCase():

let text4 = "Hello World!";       
let text5 = text1.toLowerCase();
alert(text5);

//concat() joins two or more strings:

let text6 = "Hello";
let text7 = "World";
let text8 = text6.concat(" ", text7);
alert(text8);

// The trim() method removes whitespace from both sides of a string:

let text9 = "      Hello World!      ";
let text10 = text9.trim();
alert(text10);


/*The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length. */

//Pad a string with "0" until it reaches the length 4:

let text11 = "5";
let padded = text.padStart(4,"0");
alert(padded);

//The charAt() method returns the character at a specified index (position) in a string:

let text12 = "HELLO WORLD";
let char = text.charAt(0);
alert(char)

// A string can be converted to an array with the split() method:
/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/
let yyy = "a,b,c,d,e";
const xxx = yyy.split(",,,,");
alert(xxx);
// Conditional Statements

//Comparisons
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

//String comparison
alert( 'Z' > 'A' ); // true
alert( 'Glow' < 'Glee' ); // false
alert( 'Bee' > 'Be' ); // true

//Comparison of different types
/*
When comparing values of different types, JavaScript converts the values to numbers. */

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

alert( true == 1 ); // true
alert( false == 0 ); // true

//Strict equality
alert( 0 === false); // false, because the types are different
alert( true !== 1); // true
alert( false == 0); // true
alert( false != 0 ); // false

//Conditional statements: if, else
let aaa = true;
if(aaa = true)
{
  alert("Hello")
}
else
{
  alert("World")
}

//Conditional statements:else , if

let bbb = true;
if(bbb = false)
{
   alert("Hiii")
}
else if(bbb = true)
{
   alert("Heyyy")
}

//Logical operators: AND

let ccc = 1; 
let ddd = 1

if(ccc == 1 && ddd == 1)
{
  alert("uoooo")
}

//Logical operators: OR
if(ccc == 1 || ddd == 1)
{
  alert("woooo")
}

//Logical operators: Not And
if(!(ccc == 1 && ddd == 1))
{
  alert("uoooo")
}
else
{
  alert("yooo")
}

//switch statement
//Similer to if else statement
let expr = 'Morning';
switch (expr) {
  case 'Morning':
    alert('Good Morning!!!')
    break;
  case 'Night':
    alert('Good Night!!!');
    break;
}

//Ternary operator

//This is abbreviation of if else statement, also it is useful 
//sometiong I want to test if else statement.

let sss = 'AAAA'

  sss  = 'AAAA'
  ? alert("BBBBB")
  : alert("CCCCC");