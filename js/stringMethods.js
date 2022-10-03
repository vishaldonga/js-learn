import { myName, mySurname } from "./constants.js";

//myName is string

//length =>property
console.log(myName.length)

//Slice
// V=>0 I=>1 S=>2
console.log(myName.slice(1,4), myName) //isa

console.log(myName.slice()) //Vishal

console.log(myName.slice(3)) //hal

//substring (start index is mandatory)
console.log(myName.substring(1,4), myName) //isa

//substr => not recommended
console.log(myName.substr(1,3)) //isa

//replace
console.log(myName.replace())

//first occuranc or only occurance
console.log(myName.indexOf("ish"))

//last occurance index
const var1 = "vishalvishalvishal"
console.log(var1.lastIndexOf("ish"))

//toUpperCase
console.log(var1.toUpperCase()) //VISHALVISHALVISHAL

//toLowerCase
console.log(var1.toLowerCase()) //VISHALVISHALVISHAL

//concat
console.log(myName.concat(mySurname))

//remove the spaces from start and end of string
let text1 = "      Hello World!      ";
console.log(text1.trim());

//trims space of staring
console.log(text1.trimStart());


//trims space of ending
console.log(text1.trimEnd());


//Split
//Converting a String to an Array
const data = "vishal,sri,lakshmi"
console.log(myName.split(",")) // ["vishal","sri","lakshmi"]

