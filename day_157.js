function corporateFlights(flights = [], bookings = [[]]) {
    let resultMap = new Map();
    for (let i = 0; i < bookings.length; i++) {
        let [src, tgt, load] = bookings[i];
        for (let j = src; j <= tgt; j++) {
            let temp = resultMap.get(j);
            if (temp === undefined) {
                temp = load
            } else {
                temp += load
            }
            resultMap.set(j, temp)
        }
    }
    let resultArray = Array.from(resultMap.entries()).sort((a,b)=>a[0]-b[0]).map(([index, load]) => [flights[index], load]);
    if (resultArray.length < flights.length) {
        for (let j = resultArray.length; j < flights.length; j++) {
            resultArray.push([flights[j], 0])
        }
    }
    return resultArray;
}

console.log(corporateFlights(['A', 'B', 'C', 'D', 'E', 'F', 'G'], [[0, 1, 10], [1, 2, 20], [1, 4, 25], [5, 6, 25]]));