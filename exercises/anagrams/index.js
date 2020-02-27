// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
    
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '')
                .toLowerCase()
                .split('')
                .sort()
                .join('');

}

function anagrams2(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for(let key in charMapA) {
        if(charMapA[key] !== charMapB[key]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for(let c of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[c] = charMap[c] + 1 | 1
    }
    return charMap;
}


// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let aCharMap = charMap(a)
    let bCharMap = charMap(b);

    let removeFromACounter = 0;
    let removeFromBCounter = 0;
    for(let key in aCharMap) {
        removeFromACounter += aCharMap[key];
        removeFromBCounter += bCharMap[key];
    }
    return removeFromACounter + '' + removeFromBCounter;
}

function charMap2(str) {
    const charMap = {};
    for(let l of str) {
        charMap[l] = charMap[l] + 1 | 1
    }
    return charMap;
}

module.exports = anagrams;
