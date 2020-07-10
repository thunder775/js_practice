function copyNPaste(input) {
    if (input === 1) {
        return 0;
    }
    if (input === 0) {
        return 1;
    }
    if (input === 2 || input === 3) {
        return input;
    }
    let pathsArray = [[2, 1, 2]]
    let foundNewPath = true;
    let currentMin = input + 1;
    while (foundNewPath) {
        foundNewPath = false
        let temp = [];
        for (let i = 0; i < pathsArray.length; i++) {
            let [aCount, copyCount, steps] = pathsArray[i];
            if (aCount !== input) {
                pathsArray.splice(i, 1);
                i--;
                foundNewPath = true;
                let pathA = [aCount + copyCount, copyCount, steps + 1];
                let pathB = [aCount + (2 * copyCount), copyCount + copyCount, steps + 2]
                if (pathA[0] > input) {
                    pathA[2] = pathA[2] + pathA[0] - input
                    pathA[0] = input
                }
                if (pathB[0] > input) {
                    pathB[2] = pathB[2] + pathB[0] - input
                    pathB[0] = input
                }
                if(pathA[0]===input){
                    currentMin = Math.min(pathA[2],currentMin)
                }
                if(pathB[0]===input){
                    currentMin = Math.min(pathB[2],currentMin)
                }
                if (pathA[2] <= currentMin) {
                    temp.push(pathA)
                }
                if (pathB[2] <= currentMin) {
                    temp.push(pathB)
                }

            }
        }
        pathsArray.push(...temp)
    }
    console.log(pathsArray)
   let min = pathsArray[pathsArray.length-1][2];
    console.log(min)
    return min;
}

copyNPaste(14)
