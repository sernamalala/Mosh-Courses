const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6];

const num1 = numbers.slice();
const num2 = numbers.slice();
const num3 = numbers.slice();
const num4 = numbers.slice();
const num5 = numbers.slice();
const num6 = numbers.slice();
const num7 = numbers.slice();
const num8 = numbers.slice();
//1
for(let i = 0; i<num1.length; i++){
    console.log(num1[i]);
}

for(number of num2){
    console.log(number);
}
//2
for(let i = 0; i<num3.length; i++){

    if(num3[i]>5){

    console.log(num3[i]);
    }
}

for(number of num4){
    if(number>5){
    console.log(number);
    }
}

//3

const biggerTen1 = [];
const biggerTen2 = [];

for(let i = 0; i<num5.length; i++){

    if(num5[i]>10){

        biggerTen1.push(num5[i]);
        

    }
}
console.log(biggerTen1);
for(numberTen of num6){
    if(numberTen>10){
        biggerTen2.push(numberTen);
        
    }
}
console.log(biggerTen2);
//4

const timesFive1 = [];
const timesFive2 = [];

for(let i = 0; i<num7.length; i++){

    timesFive1.push(num7[i]*5);
    
}
console.log(timesFive1);

for(numberFive of num8){

    timesFive2.push(numberFive*5);
    


}
console.log(timesFive2);