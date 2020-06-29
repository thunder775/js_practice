function scheduler(array = [], n = 2) {
    let taskCount = new Map();
    array.forEach((char) => {
        if (taskCount.get(char) !== undefined) {
            taskCount.set(char, taskCount.get(char) + 1)
        } else {
            taskCount.set(char, 1)
        }
    });
    let sortedFrequencies = [...taskCount.entries()].sort((a, b) => b[1] - a[1]);
    let scheduledTasks = [];
    let counter = 0;
    while (taskCount.size !== 0) {
        let task = sortedFrequencies.find(([char, count]) => canBeInserted(scheduledTasks, char));
        if (task === undefined) {
            scheduledTasks.push(null)
        } else {
            let [char, count] = task;
            scheduledTasks.push(char);
            count-1===0?taskCount.delete(char):taskCount.set(char,count-1);
        }
        counter++;
        if (scheduledTasks.length === n + 1) scheduledTasks.shift();
        sortedFrequencies = [...taskCount.entries()].sort((a, b) => b[1] - a[1]);
    }
    return counter;
}

function canBeInserted(list = [], element = '') {
    return list.indexOf(element) === -1
}

// console.log(canBeInserted(['A','B'],'A',3))
console.log(scheduler(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',], 3));
console.log(scheduler(["A", "A", "A", "B", "B"], 4) === 11);
console.log(scheduler(["A", "A", "A", "B", "B", "B"], 3) === 10);
console.log(scheduler(["A", "B", "A", "B", "A", "B"], 3) === 10);
console.log(scheduler(["A", "A", "A", "B", "B", "B"], 2) === 8);
console.log(scheduler(["A", "A", "A", "B", "B", "B"], 3) === 10);
console.log(scheduler(["A"], 7) === 1);
console.log(scheduler(["A", "B"], 7) === 2);
console.log(scheduler(["A", "B", "A"], 3) === 5);
console.log(scheduler(["B", "A", "A"], 3) === 5);
console.log(scheduler(["B", "A", "A", "B"], 1) === 4);
console.log(scheduler(["B", "A", "A"], 3) === 5);
console.log(scheduler(["B", "A", "A"], 1) === 3);
console.log(scheduler(["A", "A"], 0) === 2);
console.log(scheduler(["B", "A", "A", "A"], 1) === 5);
console.log(scheduler(["A", "B", "C", "D"], 1) === 4);
console.log(scheduler(["A", "A", "A"], 0) === 3);
console.log(scheduler(["A", "A", "A"], 5) === 13);
console.log(scheduler(["A", "A", "B", "B", "A", "A"], 4) === 16);
//
//
console.log(scheduler(["A", "A", "A", "B", "B", "B"], 3) === 10);
console.log(scheduler(["A", "B", "A", "B", "A", "B"], 3) === 10);
console.log(scheduler(["A", "A", "A", "B", "B", "B"], 2) === 8);
console.log(scheduler(["A", "A", "A", "B", "B", "B"], 3) === 10);
console.log(scheduler(["A"], 7) === 1);
console.log(scheduler(["A", "B"], 7) === 2);
console.log(scheduler(["A", "B", "A"], 3) === 5);
console.log(scheduler(["B", "A", "A"], 3) === 5);
console.log(scheduler(["B", "A", "A", "B"], 1) === 4);
console.log(scheduler(["B", "A", "A"], 3) === 5);
console.log(scheduler(["B", "A", "A"], 1) === 3);
console.log(scheduler(["A", "A"], 0) === 2);
console.log(scheduler(["B", "A", "A", "A"], 1) === 5);
console.log(scheduler(["A", "B", "C", "D"], 1) === 4);
console.log(scheduler(["A", "A", "A"], 0) === 3);
console.log(scheduler(["A", "A", "A"], 5) === 13);
console.log(scheduler(["A", "A", "B", "B", "A", "A"], 4) === 16);
