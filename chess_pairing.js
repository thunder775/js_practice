function maxPairs(skillLevel, minDiff) {
    // Write your code here
    let initialLength = skillLevel.length;
    let pairs = 0;
    for (let ptr1 = 1; ptr1 < skillLevel.length; ptr1++) {
        for (let ptr2 = 0; ptr2 < ptr1; ptr2++) {
            let x  = skillLevel[ptr2];
            let y  = skillLevel[ptr1];
            if (Math.abs(skillLevel[ptr1] - skillLevel[ptr2]) === minDiff) {
                skillLevel.splice(ptr1, 1);
                skillLevel.splice(ptr2, 1);
                ptr1 -= 2;
                break;
            }
        }
    }
    return (initialLength - skillLevel.length) / 2
}

console.log(maxPairs([3, 4, 5, 2, 1, 1], 3));