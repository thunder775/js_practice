// A Capital Challenge
// Given two strings, s1 and s2, select only the characters in each string where the character in the same position in
// the other string is in uppercase. Return these as a single string.
// To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1,
// because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".

function selectLetters(s1, s2) {
    let result = '';
    result += concat(s1, s2);
    result += concat(s2, s1);
    console.log(result);
    return result;
}

function concat(s1, s2) {
    let result = '';
    for (let i = 0; i < s2.length; i++) {
        if (s2.charAt(i) === s2.charAt(i).toUpperCase()) {
            result += s1.charAt(i);
        }
    }
    return result;
}

// selectLetters("heLLo", "GUlp");
// The Complete Bracelet
// A complete bracelet is an array with at least one subsequence (pattern) repeating at least two times,
// and completely - the subsequence cannot be cut-off at any point. The subsequence must have length two or greater.
//
//Complete bracelets:
//[1, 2, 3, 3, 1, 2, 3, 3]  // Pattern: [1, 2, 3, 3]
//[1, 2, 1, 2, 1, 2, 1, 2]  // Pattern: [1, 2] or [1, 2, 1, 2]
//Incomplete bracelets:
//[1, 2, 2, 2, 1, 2, 2, 2, 1]  // Incomplete (chopped off)
function isCompleteBracelet(pattern) {
    let alpha = pattern[0];
    for (let i = 2; i < pattern.length/2+1; i++) {
        if (pattern[i] === alpha) {
            if (isValidSubsequence(pattern.slice(0, i), pattern)) {
                console.log(pattern.slice(0,i))
                // if(i===1){}
                return true;
            }
        }
    }
    return false
}

function isValidSubsequence(subSequence, pattern) {
    let tempPattern = pattern.slice();
    tempPattern.splice(0, subSequence.length);
    let nextPattern = tempPattern.splice(0, subSequence.length);
    while (areListSame(subSequence, nextPattern)&&tempPattern.length!==0) {
        nextPattern = tempPattern.splice(0, subSequence.length);
        if(nextPattern.length!==subSequence.length){
            return false;
        }
    }
    return tempPattern.length === 0;
}


function areListSame(l1, l2) {
    // if(l1.length!)
    for (let i = 0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) {
            return false;
        }
    }
    return true;
}

// console.log(isCompleteBracelet([1, 2, 1, 2, 2, 1, 2, 1, 4, 2, 2, 1, 2, 1, 2, 2,]));
// console.log(isCompleteBracelet([1, 2, 3, 3, 1, 2, 3, 3] ));
// console.log(isCompleteBracelet([1, 2, 1, 2, 1, 2, 1, 2]));
// console.log(isCompleteBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1]));
// console.log(isCompleteBracelet([1,1,1,1,1,1,1,1,1]));
console.log(isCompleteBracelet([1,1,1]));
