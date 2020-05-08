function cuttingGrass() {
    let grassLength = arguments[0];
    let output = [];
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < grassLength.length; j++) {
            grassLength[j] -= arguments[i]
        }
        let temp = checkDone(grassLength);
        output.push(temp.slice())
    }
    console.log(output);
}
cuttingGrass([1, 0, 1, 1], 1, 1, 1)
cuttingGrass([5, 6, 7, 5], 1, 2, 1);
function checkDone(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] <= 0) {
            return "DONE";
        }
    }
    return list;
}
