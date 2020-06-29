// function isbn13(string) {
//     if (string.length === 13) {
//         if (checkISBN13(string)) {
//             return 'Valid'
//         } else {
//             return 'Invalid'
//         }
//     } else {
//         if (checkISBN10(string)) {
//             return convertToISBN13( '978' + string);
//         } else {
//             return 'Invalid'
//         }
//     }
// }
//
// function checkISBN10(string) {
//     let sum = 0;
//     for (let i = 10; i > 0; i--) {
//         if (string.charAt(string.length - i) === 'X') {
//             sum += 10 * i;
//         } else {
//             sum += parseInt(string.charAt(string.length - i)) * i;
//         }
//     }
//     return sum % 11 === 0;
// }
//
// function convertToISBN13(string) {
//     let sum = 0;
//     for (let i = 0; i < 12; i++) {
//         if (i % 2 === 0) {
//             if (string.charAt(i) === 'X') {
//                 sum += 10;
//             } else {
//                 sum += parseInt(string.charAt(i));
//             }
//         } else {
//             sum += parseInt(string.charAt(i)) * 3;
//         }
//     }
//     return string.substring(0, string.length - 1) + ( 10 - sum % 10);
// }
//
// function checkISBN13(string) {
//     let sum = 0;
//     for (let i = 0; i < 13; i++) {
//         if (i % 2 === 0) {
//             if (string.charAt(i) === 'X') {
//                 sum += 10;
//             } else {
//                 sum += parseInt(string.charAt(i));
//             }
//         } else {
//             sum += parseInt(string.charAt(i)) * 3;
//         }
//     }
//     console.log(sum)
//     return sum % 10 === 0;
// }
//

function isbn13(string) {
    if (string.length === 13) {
        if (checkISBN13(string)) {
            return 'Valid'
        } else {
            return 'Invalid'
        }
    } else {
        if (checkISBN10(string)) {
            return convertToISBN13( '978' + string);
        } else {
            return 'Invalid'
        }
    }
}

function checkISBN10(string) {
    let sum = 0;
    let stringList = string.split('');
    if(stringList[9]==='X'){
        sum+=10
        stringList.splice(9,1);
    }
    sum+=stringList.reduce((a,c,ci)=>
        c*(10-ci)+a*(10-(ci+1))
    )
    // for (let i = 10; i > 0; i--) {
    //     if (string.charAt(string.length - i) === 'X') {
    //         sum += 10 * i;
    //     } else {
    //         sum += parseInt(string.charAt(string.length - i)) * i;
    //     }
    // }
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
    return string.substring(0, string.length - 1) + ( 10 - sum % 10);
}

function checkISBN13(string) {
    let sum = 0;
    for (let i = 0; i < 13; i++) {
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
    return sum % 10 === 0;
}
// console.log(isbn13("3866155238"));
// // checkISBN13("978817450494X");
// // convertToISBN13("9780316066524");
// // convertToISBN13("978817450494X");
// // console.log(isbn13("9780316066525"));
// // console.log(isbn13("0330301824"));
// // console.log(isbn13("0316066524"));
// // console.log(isbn13('3866155233'));
// // isbn13("9780316066525") // "Valid"
// //
// // isbn13("0330301824") // "Invalid"
// //
// // isbn13("0316066524") // "9780316066525"
console.log(isbn13("817450494X")) // '9788174504944'