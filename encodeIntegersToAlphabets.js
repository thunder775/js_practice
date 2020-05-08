let isValid = function (str) {
    return str >= 1 && str < 27
}
let countValidEncodings = function (str) {
 
    var count = 0
    if(str.length==1&&isValid(str)){
        return 1
    }
    if(str.length==2&&isValid(str)){
        if (isValid(str.charAt(0)) && isValid(str.charAt(1))) {
            count++
        }
        count += isValid(str)?1:0
        return count
    }
    if (str.charAt(0) == 0) {
        return 0
    }
    count+= countValidEncodings(str.substring(1))
    if(isValid(str.substring(0,2))){
        count+=countValidEncodings(str.substring(2))
    }
    return count
}



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