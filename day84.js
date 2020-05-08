// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// For example, given [[30, 75], [0, 50], [60, 150]], you should return 2.
let roomsRequired = function (list) {
    list.sort()
    list = list.filter((a) => a.length !== 0 && a[0] !== a[1])
    // let arrayCopy = JSON.parse(JSON.stringify(list));
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (canBeMerged(list[i], list[j])) {
                list[i][1] = list[j][1]
                list.splice(j, 1);
                j = i+1;
            }
        }
    }
    console.log(list)
    return list.length
}
let canBeMerged = function (a, b) {
    return a[1] <= b[0]
}
console.log(roomsRequired([[30, 75], [0, 50], [60, 150]]))
console.log(roomsRequired([[30, 75], [0, 50], [60, 150], [30, 60], []]));
console.log(roomsRequired([[30, 30]]));
console.log(roomsRequired([[]]));
console.log(roomsRequired([[10, 20], [20, 30], [30, 40]]));//1

