function carPooling(rides = [[]], capacity = 1) {
    // sort by smallest drop location magnitude
    rides.sort(([c1, s1, t1], [c2, s2, t2]) => t1 - t2);
    let dropLocationsMap = new Map();
    rides.forEach(([numToPick, src, tgt]) => {
        let toDrop = dropLocationsMap.get(tgt);
        if (toDrop === undefined) {
            toDrop = numToPick
        } else {
            toDrop += numToPick
        }
        dropLocationsMap.set(tgt, toDrop)
    });
    // sort by smallest pickup location magnitude
    rides.sort(([c1, s1, t1], [c2, s2, t2]) => s1 - s2);
    let currentOccupied = 0;
    for (let [numberToPick, src, tgt] of rides) {
        currentOccupied += numberToPick;
        currentOccupied -= dropPeople(dropLocationsMap, src);
        if (currentOccupied > capacity) return false;
    }
    return true;
}

function dropPeople(dropMap, currentLocation) {
    let toDrop = 0;
    for (let dropLocation of dropMap) {
        if (dropLocation[0] <= currentLocation) {
            toDrop += dropLocation[1];
            dropMap.delete(dropLocation[0])
        }
    }
    return toDrop;
}


console.log(carPooling([[9, 3, 4], [9, 1, 7], [4, 2, 4], [7, 4, 5]],23 ));