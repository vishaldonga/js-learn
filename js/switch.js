let myName = "sri2"
let yourName = "sri"
let pName = "test";

if (myName === "test") {
    console.log("if passed")
} else if(myName === "sri") {
    console.log("if 1 passed")
} else if(myName === "sri1") {
    console.log("if 2 passed")
} else if(myName === "sri2") {
    console.log("if 3 passed")
} else {
    console.log("if 4 passed")
}
//Termed as Switch case => alternative of if-else
switch(myName) {
    case 'test' : {  //myName === 'test
        console.log("if passed")
        break;
    }
    case 'sri': { //myName === 'sri
        console.log("if 1 passed")
        break;
    }
    case 'sri1': {  //myName === 'sri1
        console.log("if 3 passed")
        break;
    }
    case 'sri2': { //myName === 'sri2
        console.log("if 4 passed")
        break;
    }
    default: { //myName === 'sri3
        console.log("if 4 passed")
    }
}



let name1 = "Vishal";

//if (name1 === "Sri")
//else if (name1 === "Vishal")
//else // not matched

switch(name1) {
    case 'Sri' : console.log("Sri name matched");
                    break;
    case 'Vishal': console.log("Vishal name matched");
                    // break;
        default: console.log("not mathed")
}

//Getting Day
const day = new Date().getDay(); // 6

if (day === 0) {
    console.log("Sunday")
} else if(day === 1) {
    console.log("Monday")
}

switch (day) {
    case 0: //day === 0
      day = "Sunday";
      break;
    case 1: // day === 1
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }