// let isValid = function (str) {
//     return str >= 1 && str < 27
// }
function isValid(str) {
    return str >= 1 && str < 27
}
let countValidEncodings = function (str) {
    if (str.charAt(0) == 0) {
        return 0
    }
    var count = 0
    if(str.length==1&&isValid(str)){
        return 1
    }
    if(str.length==2){
        if (isValid(str.charAt(0)) && isValid(str.charAt(1))) {
            count++
        }
        count += isValid(str)?1:0
        return count
    }

    count+= countValidEncodings(str.substring(1))
    if(isValid(str.substring(0,2))){
        count+=countValidEncodings(str.substring(2))
    }
    return count
}
//
//
//
console.log(countValidEncodings('1') === 1); // 1
console.log(countValidEncodings('0') === 0); // 0
console.log(countValidEncodings('9') === 1); // 1
console.log(countValidEncodings('11') === 2); // 2
console.log(countValidEncodings('10')  === 1); // 1
console.log(countValidEncodings('29') === 1); // 1
console.log(countValidEncodings('23') === 2); // 2
console.log(countValidEncodings('111') === 3); // 3
console.log(countValidEncodings('101') === 1); // 1
console.log(countValidEncodings('123') === 3); // 3
console.log(countValidEncodings('100') === 0); // 0
console.log(countValidEncodings('1221') === 5); // 5
console.log(countValidEncodings('12345') === 3); // 3
console.log(countValidEncodings('12321') === 6); // 6
console.log(countValidEncodings('10101') === 1); // 1
console.log(countValidEncodings('06') === 0);

// let forFive = function (str) {
//     let count = 0
//     if (str.charAt(0) == 0) {
//         return 0
//     }
//     count += forFour(str.substring(1))
//     if (isValid(str.substring(0, 2))) {
//         count += forFour(str.substring(2))
//     }
//     return count
// }
// let forFour = function (str) {
//     let count = 0
//     if (str.charAt(0) == 0) {
//         return 0
//     }
//     count += forThree(str.substring(1))
//     if (isValid(str.substring(0, 2))) {
//         count += forTwo(str.substring(2))
//     }
//     return count
//
// }
// let forThree = function (str) {
//     let count = 0
//     if (str.charAt(0) == 0) {
//         return 0
//     }
//     count += forTwo(str.substring(1))
//     if (isValid(str.substring(0, 2)) && isValid(str.charAt(2))) {
//         count += 1
//     }
//     return count
// }
// // let countValidEncodings = function (str) {
// //
// //     let count = 0
// //     if (str.length == 1 && isValid(str)) {
// //         return 1
// //     }
// //     if (str.length == 2 && isValid(str)) {
// //         if (isValid(str.charAt(0)) && isValid(str.charAt(1))) {
// //             count++
// //         }
// //         count += isValid(str) ? 1 : 0
// //         return count
// //     }
// //     if (str.charAt(0) == 0) {
// //         return 0
// //     }
// //     count += getCount(str.substring(1))
// //     if (isValid(str.substring(0, 2))) {
// //         count += getCount(str.substring(2))
// //     }
// //     return count
// // }
// let forTwo = function (str) {
//     let count = 0
//     if (str.charAt(0) == 0) {
//         return 0
//     }
//     if (isValid(str.charAt(0)) && isValid(str.charAt(1))) {
//         count++
//     }
//     count += isValid(str) ? 1 : 0
//     return count
// }


// console.log(forFour('7895'))
// console.log(countValidEncodings('1121'))
// console.log(countValidEncodings('1') === 1); // 1
// console.log(countValidEncodings('0') === 0); // 0
// console.log(countValidEncodings('9') === 1); // 1
// console.log(countValidEncodings('11') === 2); // 2
// console.log(countValidEncodings('10') === 1); // 1
// console.log(countValidEncodings('29') === 1); // 1
// console.log(countValidEncodings('23') === 2); // 2
// console.log(countValidEncodings('111') === 3); // 3
// console.log(countValidEncodings('101') === 1); // 1
// console.log(countValidEncodings('123') === 3); // 3
// console.log(countValidEncodings('100') === 0); // 0
// console.log(countValidEncodings('1221') === 5); // 5
// console.log(forFive('12345') === 3); // 3
// console.log(forFive('12321') === 5); // 6// should be 5
// console.log(forFive('10101') === 1); // 1
// console.log(countValidEncodings('06') === 0); // 0