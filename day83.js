// Given a list of length 'n' with each element in the range 1 to n,
// find the first duplicate element
// Example
// [1, 2, 2, 1, 5]
// output -> 2
let firstDuplicate = function (list) {
    for (let i = 0; i < list.length; i++) {
        if (list[Math.abs(list[i]) - 1] < 0) {
            return Math.abs(list[i])
        }
        list[Math.abs(list[i]) - 1] = -list[Math.abs(list[i]) - 1]
    }
    return -1
}

console.log(firstDuplicate([1, 2, 2, 1, 5]))
console.log(firstDuplicate([1, 2, 5, 1, 2, 1, 5]))
console.log(firstDuplicate([3, 1, 3, 4, 2]))
console.log(firstDuplicate([2, 1, 1]))
// Challenge 2 : What is time complexity of your algorithm?
// e.g O(n), O(n^2), O(log n)


