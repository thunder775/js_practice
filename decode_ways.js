function numDecodings(str = "A") {
    let dpArray = Array(str.length).fill(-1);
    getWaysToDecode(str, 0, dpArray) - 1;
    return dpArray[0]!==-1?dpArray[0]:0;
}

function getWaysToDecode(str, index, dpArray) {

    if (index === str.length) {
        return 1;
    }

    if (str[index] === "0") {
        return 0;
    }

    if (dpArray[index] !== -1) {
        return dpArray[index];
    }

    let result = getWaysToDecode(str, index + 1, dpArray);
    if (index + 2 <= str.length && Number(str.substring(index, index + 2)) <= 26) result += getWaysToDecode(str, index + 2, dpArray);
    dpArray[index] = result
    return result
}
console.log(numDecodings("1120"))
