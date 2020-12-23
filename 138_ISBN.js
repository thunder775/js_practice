// console.log(isbn13("3866155238"));
// checkISBN13("978817450494X");
// convertToISBN13("9780316066524");
// convertToISBN13("978817450494X");
// console.log(isbn13("9780316066525"));
// console.log(isbn13("0330301824"));
// console.log(isbn13("0316066524"));
// console.log(isbn13('0330301824'));
console.log(isbn13('0316066524'));
// console.log(isbn13('0  3  3  0  3  0  1  6  2  4'));
// isbn13("9780316066525") // "Valid"
//
// isbn13("0330301824") // "Invalid"
//
// isbn13("0316066524") // "9780316066525"
// console.log(isbn13("817450494X")) // '9788174504944'

function isbn13(string = '') {
    let length = string.length;
    let stringArray = string.split('')
    if (stringArray[9] === 'X') stringArray[9] = 10;
    stringArray = stringArray.map(val => Number(val))
    if (length === 13) {
        if (isIsbn13(stringArray)) return "Valid"
    } else {
        if (isIsbn10(stringArray)) return convertToISBN13([9, 7, 8, ...stringArray.slice(0, 9)])
    }
    return "Invalid"
}

function isIsbn13(stringArray) {
    let sum = stringArray.reduce((a, b, index) => {
        if (index % 2 !== 0) {
            b = b * 3
        }
        return b + a;
    }, 0);
    return sum % 10 === 0;
}

function isIsbn10(stringArray) {
    let counter = 10;
    let sum = stringArray.reduce((accumulator, currentValue) => {
        currentValue = currentValue * counter;
        counter--
        return accumulator + currentValue;
    }, 0);
    return sum % 11 === 0;
}

function convertToISBN13(stringArray) {
    let sum = stringArray.reduce((a, b, index) => {
        if (index % 2 !== 0) {
            b = b * 3
        }
        return b + a;
    }, 0);
    return [...stringArray, (10 - sum % 10)].join('');
}
