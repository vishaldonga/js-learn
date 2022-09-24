//Javascript datatype
var myName1; //undefined
let number1 = 1233;//bigint, number
let boolean = true; // or false => boolean data type
let myname = 'Vishal'; //string datatype
let myNullType = null; // null datattype

//when it comes to Square bracket [] it is array
let testArray = ["name1", "name2", "name3", "name4"]; // Array => Object datatype
let testObjact = { //Object can't be iterate
    name: 'Vishal' //key: value
}
let loopArray = [
    {
        name: 'Vishal' //key: value
    },
    {
        name: 'Vishal2' //key: value
    }
]

//Difference between array and object is => Array can be iterate i.e loop

for (let index = 0; index < testArray.length; index++) {

    //console.log(index, testArray[index]) ///fetching data => time taking
    if (testArray[index] === "name3") {
        console.log(index, "My message");
    }
}

//
// index = 0 testArray[0] => "name1"  0 < 4 => true
// index = 1 testArray[1] => "name2"  1 < 4 => true
// index = 2 testArray[2] => "name3"  2 < 4 => true
// index = 3 testArray[3] => "name4"  3 < 4 => true
// 4 < 4 => false => loop stopped

//Operators and Expressions
// + - * % /

console.log(2+3) //5
console.log(2-3)
console.log(2*3)
console.log(2/3)

// + operator
//For number 
console.log(2+3) //Addition => 5
//For string
let string1 = 's1'
let string2 = 's2'
let string3 = 's3'
console.log(string1+string2) //s1s2 => concatenation
console.log(string1.concat(string2)) // concatenation operator with single value
console.log(string1.concat([string2,string3])) // concatenation operator with array(multiple) value
console.log(`${string1}${string2}`) // backtick operator
console.log(`My name is ${string1}${string2}`) //Syntax=> ${variableName} //My name is s1s2

//For Boolean
//True => 1
//False => 0
console.log(true + true) //2 Termed as type conversion 
//Here converting type from boolean to number just because operator is +
let myTrue = true;
let  myFalse = false;
console.log(myFalse + myTrue) // 0 + 1 => 1

//Falsy Values in Javascript => false
//
