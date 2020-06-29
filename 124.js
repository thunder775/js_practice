function joinOverlapping(words) {
    let result = words[0];
    let overlaps = [];
    for (let i = 0; i < words.length - 1; i++) {
        let [rem, com] = findRemainder(words[i], words[i + 1]);
        result += rem;
        overlaps.push(com);
    }
    overlaps.sort((a, b) => a - b);
    console.log([result,overlaps[0]]);
    return [result,overlaps[0]];
}

function findRemainder(word1, word2) {
    let commonLength = (word1.length > word2.length) ? word2.length : word1.length;
    for (let i = 0; i < commonLength; i++) {
        if (word2.startsWith(word1.substring(word1.length - (commonLength - i)))) {
            return [word2.substring(commonLength - i, word2.length), commonLength - i]
        }
    }
    return [word2, 0];
}
console.log(joinOverlapping(["oven", "envier", "erase", "serious"]));// "ovenvieraserious"

console.log(joinOverlapping(["move", "over", "very"]));// "movery"

console.log(joinOverlapping(["to", "ops", "psy", "syllable"])); // "topsyllable"
//
console.log(joinOverlapping(["move", "over", "movery"]));