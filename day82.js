// In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).

// Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.

// Examples
let isGoalScored = function (matrix) {
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0].indexOf('0') > 2 && matrix[i][0].indexOf('0') < 8) {
            return true
        }
    }
    return false
}
console.log(isGoalScored([
    ["  #     #  "],
    ["  #  0  #  "],
    ["  #     #  "],
    ["  #######  "],
    ["     #     "],
    ["     #     "],
    ["     #     "]
]))// true

console.log(isGoalScored([
    ["  #0    #  "],
    ["  #     #  "],
    ["  #     #  "],
    ["  #######  "],
    ["     #     "],
    ["     #     "],
    ["     #     "]
]))// true

console.log(isGoalScored([
    ["  #     #  "],
    ["  #     #  "],
    ["  #     # 0"],
    ["  #######  "],
    ["     #     "],
    ["     #     "],
    ["     #     "]
])) // false
