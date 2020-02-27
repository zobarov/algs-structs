// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => {
        return char + rev;
    }, '');

    //const mainStr = 'str1,str2,str3,str4';
    //const commas = [...mainStr].reduce((a, c) => c === ',' ? ++a : a, 0);

}

function countA(str) {
    const count = [...str].reduce((acc, c) => c === 'a' ? ++acc : acc, 0);
    return count;
 }

module.exports = reverse;

/* function reverse(str) {
    let reversed = '';

    for(let character of str) {
        reversed = character + reversed;
    }
    return reversed;
} */

/* function reverse(str) {
    const arr = str.split('');
    arr.reverse()
    return arr.join('');
} */