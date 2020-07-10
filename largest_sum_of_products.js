function largestSum(inputArray = [], k) {
    if ( k === 1) {
        return inputArray.reduce((a, b) => a * b);
    }
    let biggestPossibleLength = inputArray.length - k + 1;
    let possibleSums = [];
    for (let i = 1; i <= biggestPossibleLength; i++) {
        // let x = inputArray.slice(0, i).reduce((a, b) => a * b);
        possibleSums.push(inputArray.slice(0, i).reduce((a, b) => a * b) + largestSum(inputArray.slice(i), k - 1))
    }
    return possibleSums.reduce((a, b) => Math.max(a, b))
}

console.log(largestSum([9, 1, 2, 3, 9], 3));