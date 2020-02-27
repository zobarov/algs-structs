// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, row = 0, stair = '') {
    //This is BASE STATE
   if(n === row) {
       return;
   }
   //We reach end of row. Outcome in console and go to next row:
   if(n === stair.length) {
       console.log(stair);
       steps(n, row + 1);
       return;   //<-- very important to return from here
   }
   const add = stair.length <= row ? '#' : ' ';
   steps(n, row, stair + add)
}


function stepsSimple    (n) {
    for(let row = 0; row < n; row++) {
        let str = '';
        for(let column = 0; column < n; column++) {
            if(column <= row) {
                str += '#'
            } else {
                str += ' '
            }
        }
        console.log(str)
    }
}

module.exports = steps;
