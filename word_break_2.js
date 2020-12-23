function wordBreak(str = "", dictionaryArray = []) {
    let memo = Array(str.length).fill(-1);
    solve(0, str, dictionaryArray, memo, [[]]);
    console.log(JSON.stringify(memo[0]))
}

function solve(currentIndex, str, dictionary, memo, backtrackedArray) {
    if (currentIndex === str.length) {
        return backtrackedArray;
    }
    if (memo[currentIndex] !== -1) {
        return memo[currentIndex];
    }

    let resultArray = [];
    for (let word of dictionary) {
        let currentSub = str.substr(currentIndex, word.length);
        let possibleResults = [];
        if (currentSub === word) {
            let copy = Array(...backtrackedArray);
            copy = copy.map(arr => {
                arr.push(word);
                return arr
            });
            let remainingStrWords = solve(currentIndex + word.length, str, dictionary, memo, copy);
            possibleResults.push(...remainingStrWords);
        }
        if (possibleResults.length !== 0) {
            resultArray.push(...possibleResults)
        }
    }
    return memo[currentIndex] = resultArray;

}

wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])
// wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"])