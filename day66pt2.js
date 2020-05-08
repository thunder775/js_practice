// implement binary search on enqueue method
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
        if (this.collection.length === 0) {
            this.collection.push(item)
        } else {
            binarySearchEnqueuing(this.collection, item, 0, this.collection.length - 1)
            // for (let i = 0; i < this.collection.length; i++) {
            //     if (item[1] < this.collection[i][1]) {
            //         this.collection.splice(i, 0, item);
            //         break
            //     }
            //     if (item[1] === this.collection[i][1] && i === this.collection.length - 1) {
            //         this.collection.push(item);
            //         break
            //     }
            //     if (item[1] === this.collection[i][1]) {
            //         continue
            //     }
            //     if (i === this.collection.length - 1) {
            //         this.collection.push(item);
            //         break
            //     }
            // }
        }
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

let dequeue = function () {
};

function binarySearchEnqueuing(list, item, start, end) {
    if (start === end) {
        console.log(item[1] >= list[start][1] ? 1 : 0);
        list.splice(item[1] >= list[start][1] ? 1 : 0, 0, item);
        return;

    }
    if (list[end][1] <= item[1]) {
        list.push(item);
        return;
    }
    if (end - start === 1) {
        list.splice(end, 0, item);
        return;
    }
    let mid = Math.floor((end + start) / 2);
    if (item[1] >= list[mid][1]) {
        start = mid;
        binarySearchEnqueuing(list, item, start, end)
    } else {
        end = mid;
        binarySearchEnqueuing(list, item, start, end)
    }

}

// console.log(binarySearchEnqueuing([1, 2, 2, 2, 4, 4, 7, 7], 0, 0, 7))
let checkEquality = function (listOne, listTwo) {
    return (listOne[0] === listTwo[0]) && (listOne[1] === listTwo[1])
}
let test1 = function () {
    let q1 = new PriorityQueue()
    q1.enqueue(['a', 5])
    q1.enqueue(['b', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['d', 3])
    q1.enqueue(['e', 3])
    console.log(q1.collection)
    return checkEquality(q1.front(), ['b', 1])

}
let test2 = function () {
    let q1 = new PriorityQueue()
    q1.enqueue(['a', 5])
    q1.enqueue(['b', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['d', 3])
    q1.dequeue()
    return checkEquality(q1.dequeue(), ['c', 2])

}
let test3 = function () {
    let q1 = new PriorityQueue()
    q1.enqueue(['a', 5])
    q1.enqueue(['b', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['d', 3])
    q1.dequeue()
    q1.dequeue()
    return (q1.size() === 2)

}
let test4 = function () {
    let q1 = new PriorityQueue()
    q1.enqueue(['a', 5])
    q1.enqueue(['b', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['d', 3])
    q1.dequeue()
    q1.dequeue()
    q1.dequeue()
    return (q1.isEmpty() === false)

}
let test5 = function () {
    var q1 = new PriorityQueue()
    q1.enqueue(['a', 1])
    q1.enqueue(['b', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['d', 2])
    // console.log(q1.collection)
    q1.dequeue()
    q1.dequeue()
    q1.dequeue()
    return checkEquality(q1.dequeue(), ['d', 2])

}
let test6 = function () {
    let q1 = new PriorityQueue()
    q1.enqueue(['a', 1])
    q1.enqueue(['b', 1])
    q1.enqueue(['d', 3])
    q1.enqueue(['e', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['d', 2])
    console.log(q1.collection)
    q1.dequeue()
    q1.dequeue()
    q1.dequeue()
    return checkEquality(q1.dequeue(), ['c', 2])
}
let test7 = function () {
    let q1 = new PriorityQueue()
    q1.enqueue(['a', 1])
    q1.enqueue(['b', 1])
    q1.enqueue(['d', 3])
    q1.enqueue(['e', 1])
    q1.enqueue(['c', 2])
    q1.enqueue(['f', 2])
    q1.enqueue(['g', 1])
    q1.enqueue(['x', 2])
    console.log(q1.collection)
    q1.dequeue()
    q1.dequeue()
    q1.dequeue()
    return checkEquality(q1.dequeue(), ['g', 1])
}
console.log(test1())
console.log(test2())
console.log(test3())
console.log(test4())
console.log(test5())
console.log(test6())
console.log(test7())