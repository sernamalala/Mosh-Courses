let x = 10;
let y = x;

x = 20

//x & y are two independent variables
//when we work with primitive types

let x2 = {value:10}
let y2 = x2;

x2.value = 20;

//x2 and y2 are not independent 
//they both point to the same reference in memory
//objects are copied by their reference

let numberObj = {value:10};

function increase(numberObj){
    numberObj.value++;
}

increase(numberObj);
console.log(numberObj);