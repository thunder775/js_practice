function taskScheduler(tasks = [], n = 1) {
    let taskMap = {};
    tasks.forEach((task) => {
        if (taskMap[task] !== undefined) {
            taskMap[task] += 1
        } else {
            taskMap[task] = 1;
        }

    });
    let taskList = [];
    for (let task in taskMap) {
        taskList.push([task, taskMap[task]])
    }
    taskList.sort((a, b) => b[1] - a[1]);
    let maxFrequency = taskList[0][1];
    let idleSlots = (maxFrequency - 1) * n;
    for (let i = 1; i < taskList.length; i++) {
        if (taskList[i][1] === maxFrequency) {
            idleSlots -= maxFrequency - 1
        } else {
            idleSlots -= taskList[i][1]
        }
    }
    console.log(taskList);
    return idleSlots <= 0 ? tasks.length : tasks.length + idleSlots;
}

console.log(taskScheduler(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',], 3));
