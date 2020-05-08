// Challenge 1
// Group n Sort
// Create a function that takes in an array of numbers or strings and returns an array with the items 
// from the original array stored in subarrays. Items of the same value should be in the same subarray.

// Examples
// groupNSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

// groupNSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]
let groupNSort = function (list) {
    let output = []
    for (var i = 0; i < list.length; i++) {
        insertInOutputList(output, list[i])
    }
    console.log(output)
}
let insertInOutputList = function (output, element) {
    for (var i = 0; i < output.length; i++) {
        if (output[i][0] == element) {
            output[i].push(element)
            return
        }
    }
    output.push([element])
}
groupNSort([2, 1, 2, 1])
groupNSort([5, 4, 5, 5, 4, 3])
// Challenge 2
// Same Letter Patterns
// Create a function that returns true if two strings share the same letter pattern, and false otherwise.
// Examples
// sameLetterPattern("ABAB", "CDCD") ➞ true

// sameLetterPattern("ABCBA", "BCDCB") ➞ true

// sameLetterPattern("FFGG", "CDCD") ➞ false
let sameLetterPattern = function (str1, str2) {
    let listMap = []
    for (var i = 0; i < str1.length; i++) {
        listMap.push([str1.charAt(i), str2.charAt(i)])
    }
    return isValid(listMap)
}
let isValid = function (list) {
    for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
            if (list[i][0] == list[j][0] && list[i][1] != list[j][1])
                return false
        }
    }
    return true
}


console.log(sameLetterPattern("ABCBA", "BCDCB"))
console.log(sameLetterPattern("FFGG", "CDCD"))
console.log(sameLetterPattern("ABAB", "CDCD"))