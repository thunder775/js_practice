function replace(inputNum) {
    if (inputNum === 1) {
        return 0
    }
    if (inputNum === 2) {
        return 1
    }
    if (inputNum === 3) {
        return 2;
    }
    let steps = 0;
    if (inputNum % 2 === 0) {
        steps += 1;
        steps += replace((inputNum / 2))
    } else {
        steps += 1;
        steps += Math.min(replace(inputNum - 1), replace(inputNum + 1))
    }
    return steps
}
console.log(replace(8));
console.log(replace(7));
console.log(replace(1234423432478977));