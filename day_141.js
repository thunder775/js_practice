function numberOfBoomerangs(list) {
    let result = 0;
    for (let i = 0; i < list.length; i++) {
        let distances = {};
        for (let j = 0; j < list.length; j++) {
            if (i !== j) {
                let currentDistance = getDistance(list[i], list[j]);
                if (distances[currentDistance] !== undefined) {
                    distances[currentDistance] += 1
                } else {
                    distances[currentDistance] = 1;
                }
                for (let s in distances) {
                    if (distances[s] > 1) {
                        let nFact = fact(distances[s]);

                        let rFact = fact(distances[s] - 2)
                        result += nFact / rFact;
                    }
                }
            }
        }
    }
    console.log(result);
    return result
}

function fact(number) {
    if (number === 1 || number === 0) {
        return 1
    } else {
        return fact(number - 1) * number;
    }
}

function getDistance(l1, l2) {
    return Math.pow((l1[0] - l2[0]), 2) + Math.pow((l1[1] - l2[1]), 2);
}


numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]);
