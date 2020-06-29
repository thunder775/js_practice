function taskScheduler(tasks = [], n = 1) {
    let charMap = {};
    tasks.forEach((task) => {
        if (charMap[task] !== undefined) {
            charMap[task] += 1
        } else {
            charMap[task] = 1;
        }

    });
    let charList = [];
    for (let task in charMap) {
        charList.push([task, charMap[task]])
    }
    charList.sort((a, b) => b[1] - a[1]);
    let maxFrequency = charList[0][1];
    let idleSlots = (maxFrequency - 1) * n;
    for (let i = 1; i < charList.length; i++) {
        if (charList[i][1] === maxFrequency) {
            idleSlots -= maxFrequency - 1
        } else {
            idleSlots -= charList[i][1]
        }
    }
    console.log(charList);
    return idleSlots <= 0 ? tasks.length : tasks.length + idleSlots;
}

console.log(taskScheduler(['A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E',], 3));
