// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(var numb = 1; numb <= n; numb++) {
        var output = '';
        if(numb % 3 === 0) {
            output += 'fizz'
        }
        if(numb % 5 === 0) {
            output += 'buzz'
        }
        if(output.length === 0) {
            output = numb;
        }
        console.log(output)
    }
}

module.exports = fizzBuzz;
