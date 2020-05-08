// Bitwise Operations
// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23) ➞ 00000110
// bitwiseOR(6, 23) ➞ 00010111
// bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

// Examples
// bitwiseAND(7, 12) ➞ 4
// bitwiseOR(7, 12) ➞ 15
// bitwiseXOR(7, 12) ➞ 11
function doOperation(num1, num2, func) {
    let str1 = (parseInt(num1)).toString(2);
    let str2 = (parseInt(num2)).toString(2);
    str1 = makeLengthSame(str1, str2)[0];
    str2 = makeLengthSame(str1, str2)[1];
    let list1 = str1.split('');
    list1 = toTrueFalse(list1);
    let list2 = str2.split('');
    list2 = toTrueFalse(list2);
    let output = [];
    for (let i = 0; i < list1.length; i++) {
        output.push(func(list1[i], list2[i]))
    }
    return parseInt(toBits(output), 2);
}

function toBits(num) {
    for (let i = 0; i < num.length; i++) {
        num[i] = num[i] ? '1' : '0';
    }
    return num.join('')
}

function toTrueFalse(list) {
    for (let i = 0; i < list.length; i++) {
        list[i] = list[i] === '1';
    }
    return list
}

function AND(num1, num2) {
    return num2 && num1
}

function OR(num1, num2) {
    return num1 || num2
}


function XOR(num1, num2) {
    return (num2 || num1) && !(num1 && num2)
}


console.log(doOperation(7, 12, OR));
console.log(doOperation(7, 12, AND));
console.log(doOperation(7, 12, XOR));

function makeLengthSame(num1, num2) {
    let greaterLength = num1.length > num2.length ? num1.length : num2.length;
    if (num1.length !== greaterLength) {
        let temp = num1.length;
        for (let i = 0; i < greaterLength - temp; i++) {
            num1 = '0' + num1;
        }
    }
    if (num2.length !== greaterLength) {
        let temp = num2.length;
        for (let i = 0; i < greaterLength - temp; i++) {
            num2 = '0' + num2;
        }
    }
    return [num1, num2]
}

// Part 2
// Given any two integers and a base, write a function which adds the digit of
// each number without carrying over to next digit and returns the new number
function bitwiseXOR(num1, num2, base) {
    num1 = parseInt(num1).toString(base);
    num2 = parseInt(num2).toString(base);
    let binary1 = makeLengthSame(num1, num2)[0];
    let binary2 = makeLengthSame(num1, num2)[1];
    let result = 0;
    for (let i = 0; i < binary1.length; i++) {
        let temp = parseInt(binary1.charAt(i), base) + parseInt(binary2.charAt(i), base);
        temp = temp % base;
        result += Math.pow(base, binary1.length - i - 1) * temp;
    }
    return result;
}

// console.log(bitwiseXOR(10, 3, 2))
// console.log(bitwiseXOR(23, 5, 3)); // 25
// console.log(bitwiseXOR(23, 5, 16)); // 28
// console.log(bitwiseXOR(23, 5, 13)); // 15












