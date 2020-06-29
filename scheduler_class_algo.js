function scheduler(array = [], n = 2) {
    let taskCount = new Map();
    array.forEach((char) => {
        if (taskCount.get(char) !== undefined) {
            taskCount.set(char, taskCount.get(char) + 1)
        } else {
            taskCount.set(char, 1)
        }
    });
    let sortedFrequencies = [...taskCount.keys()].sort((a, b) => taskCount.get(b) - taskCount.get(a));
    let scheduledTasks = [];
    let counter = 0;
    while (taskCount.size !== 0) {
        let currentLength = scheduledTasks.length;
        for (let pointer = 0; pointer < sortedFrequencies.length; pointer++) {
            if (taskCount.get(sortedFrequencies[pointer]) !== undefined) {
                if (canBeInserted(scheduledTasks, sortedFrequencies[pointer], n)) {
                    scheduledTasks.push(sortedFrequencies[pointer]);
                    taskCount.set(sortedFrequencies[pointer], taskCount.get(sortedFrequencies[pointer]) - 1);
                    if (taskCount.get(sortedFrequencies[pointer]) === 0) {
                        taskCount.delete(sortedFrequencies[pointer])
                    }
                    break;
                }
            }
        }
        if (currentLength === scheduledTasks.length) {
            scheduledTasks.push(null);
        }
        counter++;
        if (scheduledTasks.length === n + 1) scheduledTasks.shift();
        sortedFrequencies = [...taskCount.keys()].sort((a, b) => taskCount.get(b) - taskCount.get(a));
    }
    return counter;
}

function canBeInserted(list = [], element = '', k = 2) {
    return list.indexOf(element) === -1
}

// console.log(canBeInserted(['A','B'],'A',3))
console.log(scheduler(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',], 3));
