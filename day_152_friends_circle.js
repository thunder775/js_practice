// function circleNum(matrix = [[]]) {
//     let connectionsList = [];
//     for (let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < row; col++) {
//             if (matrix[row][col] === 1) {
//                 connectionsList.push([row, col])
//             }
//         }
//     }
//     console.log(connectionsList);
//     connectionsList = connectionsList.map(([node1, node2]) => [Math.min(node1, node2), Math.max(node1, node2)])
//     console.log(connectionsList);
//     let connectionsMap = new Map();
//     for (let [src, tgt] of connectionsList) {
//         let connections = connectionsMap.get(src);
//         if (connections === undefined) {
//             connections = [tgt];
//             connectionsMap.set(tgt,[src])
//         } else {
//             connections.push(tgt)
//         }
//         connectionsMap.set(src, connections);
//     }
//     console.log(connectionsMap);
//     let finalSet = new Set();
//     for (let node of processConnections(connectionsMap, [...connectionsMap.keys()][0])) {
//         finalSet.add(node)
//     }
//     if (finalSet.size === matrix.length) {
//         return 1
//     } else if (finalSet.size === 0) {
//         return matrix.length
//     } else {
//         return 1 + matrix.length - finalSet.size
//
//     }
// }
//
// function processConnections(keysMap, startKey) {
//     if (keysMap.size === 0) {
//         return [];
//     }
//     let resultSet = [startKey];
//     let toProcessKeys = keysMap.get(startKey);
//     keysMap.delete(startKey);
//     for (let key of toProcessKeys) {
//         resultSet.push(key);
//         if (keysMap.get(key) !== undefined) {
//             resultSet.push(...processConnections(keysMap, key))
//         }
//     }
//     return resultSet
// }

// circleNum(
//     [[1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]]);
circleNum(
    [[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]]);

function processSetArray(setArray = [new Set()], node1 = 1, node2 = 1) {
    let toMergeSets = [];
    for (let i = 0; i < setArray.length; i++) {
        if (setArray[i].has(node1) || setArray[i].has(node2)) {
            toMergeSets.push(setArray[i]);
            setArray.splice(i, 1);
            i--;
        }
    }
    let toAddValues = [];
    let finalSet = new Set();
    for (let i = 0; i < toMergeSets.length; i++) {
        toAddValues.push(...toMergeSets[i].keys());
    }
    toAddValues.forEach((value) => finalSet.add(value));
    if (finalSet.size !== 0) {
        setArray.push(finalSet)
    }
}

function circleNum(matrix = [[]]) {
    let resultSetArray = [];
    for (let i = 0; i < matrix.length; i++) {
        resultSetArray.push(new Set().add(i))
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < row; col++) {
            if (matrix[row][col] === 1) {
                processSetArray(resultSetArray, row, col)
            }
        }
    }
    return resultSetArray.length
}

