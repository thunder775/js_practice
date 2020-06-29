function roomsAndKeys(keys = [[]]) {
    let keysMap = new Map();
    keys.forEach((keyValues, index) => keysMap.set(index, keyValues))
    let resultSet = new Set(processKeys(keysMap, 0));
    if (resultSet.has(0)) resultSet.delete(0);
    return resultSet.size === keys.length - 1
}

function processKeys(keysMap, startKey) {
    if (keysMap.size === 0) {
        return [];
    }
    let resultSet = [];
    let toProcessKeys = keysMap.get(startKey);
    keysMap.delete(startKey);
    for (let key of toProcessKeys) {
        resultSet.push(key);
        if (keysMap.get(key) !== undefined) {
            resultSet.push(...processKeys(keysMap, key))
        }
    }
    return resultSet
}


console.log(roomsAndKeys([[1, 3], [3, 0, 1], [2], [0]]));
console.log(roomsAndKeys([[1], [2], [3], []]));
