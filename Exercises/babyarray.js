// Write your code here:

function convertToBaby(array) {

    let babyMessage = [];
    for (let i = 0; i < array.length; i++) {
        babyMessage.push(`baby ${array[i]}`);


    }

    return babyMessage;
}

// When you're ready to test your code, uncomment the below and run:
/*
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
console.log(convertToBaby(animals)) 
*/
