function consecutiveTruths(arr = []) {
    let resultCount = 0;
    let currentTruthCount = 0;
    for (let item of arr) {
        if (item) {
            currentTruthCount++;
        } else {
            if (currentTruthCount >= 3) resultCount++;
            currentTruthCount = 0;
        }
    }
    resultCount+=(currentTruthCount>=3)
    return resultCount
}


consecutiveTruths([true, false, true, true, true, false, true, true]); // should return 1
consecutiveTruths([true, true, true, false, false, true, true, true]); // should return 2
consecutiveTruths([true, true, true, true, false, true, true, true]); // should return 2
consecutiveTruths([true, true, true, true, true, true, true, true]); // should return 2