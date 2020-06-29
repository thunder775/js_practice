function stemPlot(inputArray = ['']) {
    inputArray = inputArray.map((val) => val.toString().padStart(2, '0'));
    let stemsMap = new Map();
    for (let i = 0; i < inputArray.length; i++) {
        let [stem, leaf] = [inputArray[i].substring(0, inputArray[i].length - 1), inputArray[i].substring(inputArray[i].length - 1)];
        let stemFromMap = stemsMap.get(stem);
        if (stemFromMap === undefined) {
            stemFromMap = [leaf]
        } else {
            stemFromMap.push(leaf);
            stemFromMap.sort((a, b) => a - b);
        }
        stemsMap.set(stem, stemFromMap)
    }
    return Array.from(stemsMap.entries()).sort((a, b) => Number(a[0]) - Number(b[0])).map(([stem, leaves]) => `${stem} | ${leaves.flat()}`);
}

stemPlot([111, 11, 1]);
stemPlot([22, 22, 38, 22, 19]);
stemPlot([4, 8, 75]);