function longestSubstring(numericString) {
    let possibleResults = [];
    let isNextOdd = isOdd(numericString.charAt(0));

    let temp = numericString.charAt(0);
    for (let i = 1; i < numericString.length; i++) {
        if (!isOdd(numericString.charAt(i)) === isNextOdd) {
            temp += numericString.charAt(i);
            isNextOdd = !isNextOdd;
        } else {
            possibleResults.push(temp);
            temp = numericString.charAt(i);

        }
    }
    possibleResults.push(temp);
    let result = possibleResults[0];
    for (let i = 1; i < possibleResults.length; i++) {
        if (possibleResults[i].length > result.length) {
            result = possibleResults[i];
        }
    }

    return result;

}

function isOdd(number) {
    return number % 2 === 1;
}

// console.log(longestSubstring("225424272163254474441338664823"));
// console.log(longestSubstring("594127169973391692147228678476"));
// console.log(longestSubstring("721449827599186159274227324466"));
console.log(longestSubstring("1233345678"));