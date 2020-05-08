function joinOverlapping(words) {
    let result = [];
    for (let i = 0; i < words.length - 1; i++) {
        result.push(findCommonLength(words[i], words[i + 1]));
    }
    result.sort((a, b) => a - b);
    return result[0];
}

function findCommonLength(word1, word2) {
    let commonLength = (word1.length > word2.length) ? word2.length : word1.length;
    for (let i = 0; i < commonLength; i++) {
        if (word1.substring(word1.length - (commonLength - i)) === word2.substring(0, commonLength - i)) {
            return [commonLength - i]
        }
    }
    return 0;
}

console.log(joinOverlapping(["oven", "envier", "erase", "serious"]));// "ovenvieraserious"

console.log(joinOverlapping(["move", "over", "very"]));// "movery"

console.log(joinOverlapping(["to", "ops", "psy", "syllable"])); // "topsyllable"
//
console.log(joinOverlapping(["move", "over", "movery"]));