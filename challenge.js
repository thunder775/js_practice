class PriorityQueue {
    constructor() {
        this.collection = [];
    }
    printCollection() {
        console.log(this.collection);
    };
    // Only change code below this line
    enqueue(item) {
        // console.log(item)
        enqueueItem(item, this.collection, 0, this.collection.length)
        // console.log(this.collection)
    }
    dequeue() {
        return this.collection.length === 0 ? null : this.collection.shift()
    }
    front() {
        return this.collection.length === 0 ? null : this.collection[0]
    }
    size() {
        return this.collection.length
    }
    isEmpty() {
        return this.collection.length === 0
    }
    // Only change code above this line
}
let enqueueItem = function (item, collection, start, end) {
    if (collection.length === 0) {
        collection.push(item)
        return item
    }
    let indexToCheck = Math.floor((start + end) / 2)
    if (collection[0][1] > item[1]) {
        collection.splice(0, 0, item)
        return item
    } if (collection[collection.length - 1][1] < item[1]) {
        collection.splice(collection.length, 0, item)
        return item
    }
    if (collection[indexToCheck][1] == item[1]) {
        while (collection[indexToCheck][1] !== item[1]) {
            indexToCheck++
        }
        collection.splice(indexToCheck + 1, 0, item)
        return item
    }
    else if (item[1] < collection[indexToCheck][1]) {
        enqueueItem(item, collection, 0, indexToCheck)

    } else {
        enqueueItem(item, collection, indexToCheck, collection.length)

    }
}
// let fun = function () {
//     let list = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
//     let item = ["a", 4]
//     enqueueItem(item, list, 0, list.length)
//     return list
// }
// // console.log(fun())
// let checkEquality = function(listOne,listTwo){
//     return (listOne[0]===listTwo[0])&&(listOne[1]===listTwo[1])
//     }
//     let test1 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',5])
//       q1.enqueue(['b',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['d',3])
//       q1.enqueue(['e',3])
//       console.log(q1.collection)
//       return checkEquality(q1.front(),['b',1])

//       }
//     let test2 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',5])
//       q1.enqueue(['b',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['d',3])
//       q1.dequeue()
//       return checkEquality(q1.dequeue(),['c',2])

//       }
//     let test3 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',5])
//       q1.enqueue(['b',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['d',3])
//       q1.dequeue()
//       q1.dequeue()
//       return(q1.size()===2)

//       }
//     let test4 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',5])
//       q1.enqueue(['b',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['d',3])
//       q1.dequeue()
//       q1.dequeue()
//       q1.dequeue()
//       return(q1.isEmpty()===false)

//       }
//     let test5 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',1])
//       q1.enqueue(['b',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['d',2])
//       // console.log(q1.collection)
//       q1.dequeue()
//       q1.dequeue()
//       q1.dequeue()
//       return checkEquality(q1.dequeue(),['d',2])

//       }
//       let test6 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',1])
//       q1.enqueue(['b',1])
//       q1.enqueue(['d',3])
//       q1.enqueue(['e',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['d',2])
//       console.log(q1.collection)
//       q1.dequeue()
//       q1.dequeue()
//       q1.dequeue()
//       return checkEquality(q1.dequeue(),['c',2])
//       }
//       let test7 = function(){
//       var q1 = new PriorityQueue()
//       q1.enqueue(['a',1])
//       q1.enqueue(['b',1])
//       q1.enqueue(['d',3])
//       q1.enqueue(['e',1])
//       q1.enqueue(['c',2])
//       q1.enqueue(['f',2])
//       q1.enqueue(['g',1])
//       q1.enqueue(['x',2])
//       console.log(q1.collection)
//       q1.dequeue()
//       q1.dequeue()
//       q1.dequeue()
//       return checkEquality(q1.dequeue(),['g',1])
//       }
//   console.log(test1())
//   console.log(test2())
//   console.log(test3())
//   console.log(test4())
//   console.log(test5())
//   console.log(test6())
//   console.log(test7())
/// Word wrap
let wordWrap = function (word, count) {
    var length = word.length
    var i = 0
    var outputList = []
    while (i + count < word.length) {
        var temp = word.slice(i + count, i + count)
        if (temp == ' ') {
            outputList.push(word.slice(i, i + count))
            i = i + count
        } else {
            var spliceIndex = word.lastIndexOf(' ', i + count)
            if (spliceIndex > i) {
                outputList.push(word.slice(i, spliceIndex))
                i = spliceIndex
            } else {
                outputList.push((word.slice(i, i + count)))
                i = i + count
            }
            // console.log(outputList)
        }
        // console.log(outputList)
    }

    outputList.push((word.slice(i, length)))
    outputList.forEach((string) => {
        console.log(string.trim())
    })
}
// wordWrap("If I'm clever about it, I'll catch myself and try to go directly to the library, leaving lunch for later. And if I I do that, I can usually get myself to at least start to work on the assignment",40)
// wordWrap(" hello howareyou", 6)
// let decode = function (str) {
//    let possiblleCodes =[];
//     if (str.length == 2) {
//         return [str,[str.charAt(0),str.charAt(1)]]
//     } else { 
//         let toPush = str.substring(0,1)
//         let toReccurse = str.substring(1,str.length)
//         possiblleCodes.push([toPush,decode(toReccurse)])
//     }
//    return possiblleCodes
//     console.log(possiblleCodes)
// }
let isValid = function (str) {
    return str >= 1 && str < 27
}
let forFive = function (str) {
    var count = 0
    if (str.charAt(0) == 0) {
        return 0
    }
    count+=forFour(str.substring(1))
    if(isValid(str.substring(0,2))){
        count+=forFour(str.substring(2))
    }
    return count
}
let forFour = function (str) {
    var count = 0
    if (str.charAt(0) == 0) {
        return 0
    }
    count += forThree(str.substring(1))
    if (isValid(str.substring(0, 2))) {
        count += forTwo(str.substring(2))
    }
    return count

}
let forThree = function (str) {
    var count = 0
    if (str.charAt(0) == 0) {
        return 0
    }
    count += forTwo(str.substring(1))
    if (isValid(str.substring(0, 2)) && isValid(str.charAt(2))) {
        count += 1
    }
    return count
}
let countValidEncodings = function (str) {

    var count = 0
    if (str.length == 1 && isValid(str)) {
        return 1
    }
    if (str.length == 2 && isValid(str)) {
        if (isValid(str.charAt(0)) && isValid(str.charAt(1))) {
            count++
        }
        count += isValid(str) ? 1 : 0
        return count
    }
    if (str.charAt(0) == 0) {
        return 0
    }
    count += getCount(str.substring(1))
    if (isValid(str.substring(0, 2))) {
        count += getCount(str.substring(2))
    }
    return count
}
let forTwo = function (str) {
    var count = 0
    if (str.charAt(0) == 0) {
        return 0
    }
    if (isValid(str.charAt(0)) && isValid(str.charAt(1))) {
        count++
    }
    count += isValid(str) ? 1 : 0
    return count
}


// console.log(forFour('7895'))
// console.log(countValidEncodings('1121'))
// console.log(countValidEncodings('1') === 1); // 1
// console.log(countValidEncodings('0') === 0); // 0
// console.log(countValidEncodings('9') === 1); // 1
// console.log(countValidEncodings('11') === 2); // 2
// console.log(countValidEncodings('10') === 1); // 1
// console.log(countValidEncodings('29') === 1); // 1
// console.log(countValidEncodings('23') === 2); // 2
// console.log(countValidEncodings('111') === 3); // 3
// console.log(countValidEncodings('101') === 1); // 1
// console.log(countValidEncodings('123') === 3); // 3
// console.log(countValidEncodings('100') === 0); // 0
// console.log(countValidEncodings('1221') === 5); // 5
console.log(forFive('12345')==3); // 3
console.log(forFive('12321')==5); // 6// should be 5
console.log(forFive('10101')==1); // 1
// console.log(countValidEncodings('06') === 0); // 0