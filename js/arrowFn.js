//Arrow Function
//Basic Arrow Function syntax
const functionName = () => {
//Function Body
}

//Arrow without params
const sum1 = () => {
    return 2 +3; //5
}
//Arrow with params
const sum2 = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const sum3 = (firstNum, secondNum) => {
    const a= 5;
    const b = 6;
    return firstNum+a+secondNum+b;
}

console.log(sum2(2,3)) //5

//if we have only oneliner function body then we don't require return keyword and curly braces
const sum11 = () => 2 + 3; //Round braces makes it return;
const sum111 = () => (2 + 3);

const sum22 = (firstNum, secondNum) => firstNum + secondNum;

console.log(sum2(22,3)) //25








