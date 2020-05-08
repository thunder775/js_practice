// Challenge 1
// Suppose a hash # represents the backspace key being pressed. 
//Write a function that transforms a string containing # into a string without any #.

// erase("he##l#hel#llo") // "hello"
let erase = function (str) {
    let output = []
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) != "#") {
            output.push(str.charAt(i))
        } else {
            output.pop()
        }
    }
    return output.join("")
}

// console.log(erase("he##l#hel#llo"))

// Challenge 2
// Create a function that takes an array of objects like 
//{ name: "Surendra Sharma", scores: [3, 5, 4]} and returns an array of objects like 
//{ name: "Surendra Sharma", avgScore : 4 }.
// If student has no scores (an empty array) then let's assume avgScore: 0.
// Then print 5 students with highest scores sorted alphabetically by their last name

var students = [
    {
        name: "Surendra Sharma", scores: [3, 5, 4]
    },
    {
        name: "Raj Doshi", scores: [12, 8, 3]
    },
    {
        name: "Vinay Iyer", scores: [31, 5, 14]
    },
    {
        name: "Rahul Khoiwal", scores: [11, 66]
    },
    {
        name: "Aditya Singh", scores: [22, 15, 7]
    },
    {
        name: "Daksh Verma"
    },
    {
        name: "Sukanya Mishra", scores: [19]
    },
    {
        name: "Ananya", scores: [14, 22, 56, 8]
    },
]
let handleScores = function (list) {
    /// getting averages
    for (var i = 0; i < list.length; i++) {
        list[i].avgScores = getAverageScores(list[i].scores)
        delete list[i].scores
    }
    list = getTopStudents(list)
    list = getStudentsSorted(list)
    console.log(list)
}
let getAverageScores = function (scores) {
    return scores == null ? 0 : scores.reduce((a, b) => a + b, 0) / scores.length
}
let getTopStudents = function (list) {
    return list.sort((a, b) => (a.avgScores > b.avgScores) ? -1 : 1).splice(0, 5)
}
let getStudentsSorted = function (list) {
    return list.sort((a, b) => {
        if(a.name.split(" ")[1] == undefined|| b.name.split(" ")[1]==undefined){
        return  (a.name.split(" ")[0] > b.name.split(" ")[0]) ? 1 : -1
        }
       return (a.name.split(" ")[1] > b.name.split(" ")[1]) ? 1 : -1
    })
}
handleScores(students)
