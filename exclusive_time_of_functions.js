function exclusiveTimeFunction(total = 1, logs = ["1"]) {
    let resultList = Array(total).fill(0);
    let functionsStack = [];
    let lastTimeStamp = Number(logs[0].split(':')[2]);
    for (let i = 0; i < logs.length; i++) {
        let [id, state, time] = [Number(logs[i].split(':')[0]), logs[i].split(':')[1], Number(logs[i].split(':')[2])];
        let diff = time - lastTimeStamp;
        lastTimeStamp = time;
        if (functionsStack.length !== 0) {
            let currentFunction = functionsStack[functionsStack.length - 1];
            let currentVal = resultList[currentFunction];
            currentVal += diff;
            if (state === "end") {
                currentVal++;
                // lastTimeStamp++;
            }
            resultList[currentFunction] = currentVal;
            if (state === "start") {
                functionsStack.push(id)
            } else {
                functionsStack.pop();
                lastTimeStamp++
            }
        } else {
            functionsStack.push(id)
        }
    }
    return resultList;
}

console.log(exclusiveTimeFunction(3,
    ["0:start:0", "1:start:1", "2:start:2", "2:end:2", "1:end:3", "1:start:5", "1:end:5", "0:end:6"]));
console.log(exclusiveTimeFunction(2,
    ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));
