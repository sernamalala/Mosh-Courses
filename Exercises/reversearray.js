// Write your code here:
function reverseArray(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);

    }
    return reverse;
}


// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence))
// Should print ['This', 'will', 'all', 'make', 'sense.'];



