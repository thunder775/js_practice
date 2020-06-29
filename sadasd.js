function isbn13(string) {
    if (string.length === 13) {
        if (checkISBN13(string,false)) {
            return 'Valid'
        } else {
            return 'Invalid'
        }
    } else {
        if (checkISBN10(string)) {
            return checkISBN13('978' + string,true);
        } else {
            return 'Invalid'
        }
    }
}

function checkISBN10(string) {
    let sum = 0;
    for (let i = 10; i > 0; i--) {
        if (string.charAt(string.length - i) === 'X') {
            sum += 10 * i;
        } else {
            sum += parseInt(string.charAt(string.length - i)) * i;
        }
    }
    return sum % 11 === 0;
}

function convertToISBN13(string) {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            if (string.charAt(i) === 'X') {
                sum += 10;
            } else {
                sum += parseInt(string.charAt(i));
            }
        } else {
            sum += parseInt(string.charAt(i)) * 3;
        }
    }
}

function checkISBN13(string, convert) {
    let sum = 0;
    for (let i = 0; i < convert ? 12 : 13; i++) {
        if (i % 2 === 0) {
            if (string.charAt(i) === 'X') {
                sum += 10;
            } else {
                sum += parseInt(string.charAt(i));
            }
        } else {
            sum += parseInt(string.charAt(i)) * 3;
        }
    }
    if (convert) {
        return string.substring(0, string.length - 1) + (sum % 10 <= 5 ? sum % 10 : 10 - sum % 10);
    } else {
        return sum % 10 === 0;
    }
}

// checkISBN13("9780316066524");
// checkISBN13("978817450494X");
// convertToISBN13("9780316066524");
// convertToISBN13("978817450494X");
console.log(isbn13("9780316066525"));
// console.log(isbn13("0330301824"));
// console.log(isbn13("0316066524"));
// console.log(isbn13("817450494X"));
// isbn13("9780316066525") // "Valid"
//
// isbn13("0330301824") // "Invalid"
//
// isbn13("0316066524") // "9780316066525"
// isbn13("817450494X") // '9788174504944'