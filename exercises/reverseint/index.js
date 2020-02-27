// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let resultStr = '';
    var revStr = n.toString().split('').reduce((reversed, char) => {
        return char + reversed;
    }, '');
    let reversedInt = parseInt(revStr);
    return reversedInt * Math.sign(n);
}

module.exports = reverseInt;
