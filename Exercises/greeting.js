// Write your code here:

function greetAliens(array) {

    let greeting = ""
    for (let i = 0; i < array.length; i++) {

        let greeting = `Oh powerful ${array[i]}, we humans offer our unconditional surrender!`
        console.log(greeting)
    }

}



// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

