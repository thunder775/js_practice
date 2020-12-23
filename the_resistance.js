
function main(){
    let words = [
        '......-...-..',
        '......-...-..---',
        '---.-----.-..-..-..',
        '.-----.-..-..-..',
        '-....-'
    ];
    let dp =  Array(32).fill(-1);
    console.log(solve(0, words, "......-...-..---.-----.-..-..-..",dp))
}


function solve(currentIndex, words, str, dp) {
    if (currentIndex === str.length) {
        return 1
    }

    if (dp[currentIndex] !== -1) {
        return dp[currentIndex]
    }
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        let currentString = str.substr(currentIndex, words[i].length);
        if (currentString === words[i]) {
            result += solve(currentIndex + words[i].length, words, str, dp);
        }
    }
    return dp[currentIndex] = result;
}
main()
// /**
//  * Auto-generated code below aims at helping you parse
//  * the standard input according to the problem statement.
//  **/
// function toMorse(s) {
//     let toReturn = "";
//     for (let i = 0; i < s.length; i++) {
//         toReturn += charToMorseArray[s.charCodeAt(i) - 65];
//     }
//     return toReturn;
// }
//
// let charToMorseArray = [
//     ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....",
//     "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
//     "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
//     "-.--", "--.."
// ];
//
// let dictMap = new Map();
//
// const L = readline();
// const N = parseInt(readline());
//
// for (let i = 0; i < N; i++) {
//     const W = readline();
//     dictMap.set(toMorse(W),W)
// }
//
//
// function solve(currentIndex, dictMap, str, dp) {
//     if (currentIndex === L.length) {
//         return 1
//     }
//     if (currentIndex > L.length) return 0
//
//     if (dp[currentIndex] !== -1) {
//         return dp[currentIndex]
//     }
//     let result = 0;
//     for (let i = currentIndex; i < L.length ; i++) {
//         let currentString = L.substring(currentIndex, i + 1);
//         if (dictMap.get(currentString) !== undefined) {
//             let copyDict = new Map(dictMap)
//             copyDict.delete(currentString)
//             result += solve(i + 1, copyDict, str, dp);
//         }
//     }
//     dp[currentIndex] = result;
//     return result;
// }
//
//
// let dp = Array(L.length).fill(-1);
// let result = solve(0,dictMap,L,dp)
// console.log(dp[0])
