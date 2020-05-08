// Given an array of integers where every integer occurs three times except for
// one integer, which only occurs once, find and return the non-duplicated integer.
// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13],
// return 19.
function nonDuplicate(list) {
    let result = 0;
    list.forEach((element) => {
        element = parseInt(element);
        result += parseInt(element.toString(3))
        result = parseInt(moduloThree(result));
    });
    // console.log(parseInt(result, 3));
    return parseInt(result, 3);
}


console.log(nonDuplicate([4, 4, 4, 9, 5, 7, 5, 7, 5, 7]));

function moduloThree(number) {
    let list = number.toString().split('');
    let result = [];
    // console.log(list);
    list.forEach((element) => {
        element = parseInt(element);
        result.push(element % 3);
    });

    return result.join('');

    // console.log(list);
}

// moduloThree(435)
// Implement regular expression matching with the following special characters:
//
// - . (period) which matches any single character
// - * (asterisk) which matches zero or more of the preceding element
// That is, implement a function that takes in a string and a valid regular expression
// and returns whether or not the string matches the regular expression.
//
// For example, given the regular expression "ra." and the string "ray", your
// function should return true. The same regular expression on the string "raymond"
// should return false.
//
// Given the regular expression ".*at" and the string "chat", your function
// should return true. The same regular expression on the string "chats" should
// return false.
let period = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z',];

function compareStrings(regExp, str) {
    let rPointer = regExp.length - 1;
    let sPointer = str.length - 1;
    while (rPointer !== -1) {
        if (regExp.charAt(rPointer) === '.') {
            if (period.indexOf(str.charAt(sPointer)) === -1) {
                return false;
            }
            rPointer--;
            sPointer--;
        } else if (regExp.charAt(rPointer) === '*') {
            if (regExp.charAt(rPointer - 1) === '.') {
                sPointer = str.indexOf(regExp.charAt(rPointer - 2));
                rPointer -= 2;
            } else if (regExp.charAt(rPointer - 1) !== str.charAt(sPointer)) {
                return false;
            } else {
                sPointer = handleAsterisk(sPointer, str, regExp.charAt(rPointer - 1));
                rPointer -= 2;
            }
        } else {
            if (regExp.charAt(rPointer) !== str.charAt(sPointer)) {
                return false;
            }
            rPointer--;
            sPointer--;
        }
    }
    return true;
}

function handleAsterisk(index, str, char) {
    while (str.charAt(index) === char) {
        index--;
    }
    return index;
}

// console.log(compareStrings('ra.', 'ray'));
// console.log(compareStrings('a*', 'a'));
// console.log(compareStrings('ab*c', 'abbbbbbbbc'));
// console.log(compareStrings('c.at', 'chat'));
// console.log(compareStrings('c.af', 'chat'));
// console.log(compareStrings('..at', 'chat'));
// console.log(compareStrings('.ha.', 'chat'));
// console.log(compareStrings('c*at', 'cccat'));
// console.log(compareStrings('c*at', 'ccat'));
// console.log(compareStrings('c*at', 'cbat'));
// console.log(compareStrings('c.*hi', 'cabcdhi'));
// console.log(compareStrings('ra.', 'raymond'));
// console.log(compareStrings('c.*abc','cxyzabc',)===true);
// console.log(compareStrings('c.*abc','cxyzabx')===false);
// console.log(compareStrings('ab.*hello.','abxyzhellox',)===true);
// console.log(compareStrings('ab.*hello*','abxyzhellox',)===false);
// console.log(compareStrings('ab.*hello*','abxyzhelloo',)===true);
// console.log(compareStrings('ab.*hi.*ab','abxyzhixyzab',)===true);
// console.log(compareStrings('ab.*hi.*ab','abxyzhixyzabc',)===false);
// console.log(compareStrings('ab.*ab.*abcd','abxyabzabxabyzabcd',)===true);
// console.log(compareStrings('ab.*cd.*xycd','abacdxyxycd',)===true);
