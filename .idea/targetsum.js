function pairs(k, arr) {
    const map = new Map();
    for (let val of arr) {
        map.set(val, val)
    }

    let resultCount = 0;
    for (let val of arr) {
        const toFind = Math.max(k - val, val - k);
        if(toFind===val) continue;
        if (map.get(toFind) !== undefined) {
            resultCount++;
            console.log(`${val}:${toFind}`)
        }

    }
    return resultCount;
}

console.log(pairs(2, [1, 5, 3, 4, 2]))