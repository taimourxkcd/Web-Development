// in-line comment (at the end of the line)
/* 
this is a multi line comment
*/

/*
        DATA TYPES
undefined, null, boolean, string, symbol, number and object
*/
var a = 2;
var b = 2;
var c = "I am a";

a = a + 1;
b = b + 2;
c = c + "string";

console.log(a);
console.log(b);
console.log(c);

var myStr = 'I am  a " double quoted " string inside " double quotes ';
var myStr = 'I am  a " double quoted " string inside " double quotes " ';
console.log(myStr);

var ourStr = "I come first " + "I come second";
console.log(ourStr);

// concatinating strings with += operator

var newStr = "Pakistan";
newStr += "is the love of my life";
console.log(newStr);

// concatinating strings with variables
var firstN = "taimour";
var secN = "my name is " + firstN + " and i am learning js";
console.log(secN);

// append variables to strings

// finding the length of the string
firstNameLength = firstN.length;
console.log(firstNameLength);

// Immutibility of strings (they can't be altered once created)

// bracket notation to find the nth character in the string

// find the last character in the string (eg firstname = firstname[firstname.length - 1]) OR in order to find the nth-to-last character, do this:(eg firstname = firstname[firstname.length - 3])

// PART 2

var ourArray = ["Taimour", 23];

var NestedArray = [
  ["hello", 3],
  ["world", 4],
];

ourArray.push(["dog", "cat", 23]);
ourArray.pop();
console.log(ourArray);

var removeElement = ourArray.shift();
var removeElement = ourArray.unshift("happy");
// shift func removes the first element from the array
// shift func adds to the first element from the array
console.log(ourArray);
