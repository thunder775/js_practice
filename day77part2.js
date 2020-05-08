// Add the numbers given in the list below and return all digits
const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
];
let sum = function (list) {
    let firstNum = []
    list[0].split('').forEach((element) => {
        firstNum.push(parseInt(element))
    })
    let secondNum = []
    list[1].split('').forEach((element) => {
        secondNum.push((parseInt(element)))
    })
    let length = firstNum.length >= secondNum.length ? firstNum.length : secondNum.length
    if (firstNum.length !== length) {
        let temp = length - firstNum.length
        for (let i = 0; i < temp; i++) {
            firstNum.unshift(0)
        }
    }
    if (secondNum.length !== length) {
        let temp = length - secondNum.length
        for (let i = 0; i < temp; i++) {
            firstNum.unshift(0)
        }
    }


    console.log(firstNum)
    console.log(secondNum)
    let carry = 0
    let output = []
    for (let i = firstNum.length - 1; i >= 0; i--) {
        let x = firstNum[i]
        let y = secondNum[i]
        let temp = firstNum[i] + secondNum[i] + carry
        let listDigit = temp.toString().split('')
        if (listDigit.length > 1 && i != 0) {
            carry = parseInt(listDigit[0])
            temp = parseInt(listDigit[1])
        } else {
            carry = 0
        }
        output.unshift(temp)
    }
    return output.join('')
}
// console.log(sum(['9', '999']))
console.log(sum(testNums))
// completed the above case
