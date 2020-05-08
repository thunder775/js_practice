// Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs,
// and a starting airport, compute the person's itinerary. If no such itinerary exists, return null.
// All flights must be used in the itinerary.

// For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]
// and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

// Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

function flightItinerary(list, startingAirport) {
    list = list.filter((pair) => (pair[0] !== pair[1]))
    list.sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    })
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] === startingAirport) {
            result.push(list[i][0]);
            result.push(list[i][1]);
            list[i] = [];
            break;
        }
    }
    let i = 2;
    while (result.length === i) {
        for (let j = 0; j < list.length; j++) {
            if (result[i - 1] === list[j][0]) {
                result.push(list[j][1]);
                list[j] = [];
                break;
            }
        }
        i++;
    }
    console.log(result);
    return result.length === list.length + 1 ? result : null;
}

// flightItinerary([['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']], 'YUL');
// flightItinerary([['a', 'b'], ['b', 'c']], 'a');
// flightItinerary([['a', 'b'], ['a', 'c']], 'a');
// flightItinerary([['a', 'b'], ['b', 'a'], ['a', 'c'], ['c', 'd']], 'a');
// flightItinerary([['a', 'a'], ['a', 'b'], ['b', 'c'], ['c', 'd']], 'a');
// flightItinerary([['a', 'a']], 'a');
// flightItinerary([['a', 'b']], 'a');
// flightItinerary([['a', 'b'], ['b', 'c'], ['a', 'c'], ['c', 'd']], 'a');
// flightItinerary([['a', 'b'], ['b', 'c'], ['c', 'a'], ['a', 'c'], ['c', 'd']], 'a');
// flightItinerary([['A','A'],['A','A']],'A')


// Continuing from previous challenge
// If there are multiple possible itineraries, return the lexicographically smallest one.
// Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though
// ['A', 'C', 'A', 'B', 'C']
// is also a valid itinerary. However, the first one is lexicographically smaller.
// flightItinerary([['A', 'C'], ['A', 'B'], ['B', 'C'], ['C', 'A']], 'A')
// flightItinerary([['A', 'B'], ['B', 'D'], ['B', 'E'], ['D', 'E'], ['D', 'F'], ['E', 'F'], ['F', 'E']], 'A')
// flightItinerary([['A', 'B'], ['B', 'C'], ['B', 'D'], ['C', 'D'], ['C', 'E'], ['D', 'E']], 'A')


function itinerary(list, resultList) {
    let output = [];
    list.filter((element) => element !== []);
    for (let i = 0; i < list.length; i++) {
        if (resultList[resultList.length - 1] === list[i][0]) {
            let tempList = Array.from(list);
            let tempResult = Array.from(resultList);
            tempList[i] = [];
            tempResult.push(list[i][1]);
            output.push(itinerary(tempList, tempResult) === null ? tempResult : itinerary(tempList, tempResult))
        }
    }
    let result = [];
    if (output.length !== 0) {
        result = output.reduce((a, b) => {
            if (a.length > b.length) {
                return a;
            } else if (b.length > a.length) {
                return b;
            } else {
                return compareLexicographically(a, b)
            }
        });
    }
    return result.length !== 0 && result.length === list.length + 1 ? result : null;
}

function compareLexicographically(list1, list2) {
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] > list2[i]) {
            return list2
        } else if (list1[i] < list2[i]) {
            return list1
        }
    }
    return list1
}

console.log(itinerary([['A', 'B'], ['A', 'C'], ['C', 'A']], ['A']));
console.log(itinerary([['B', 'D'], ['A', 'B'], ['A', 'C'], ['C', 'A'], ['D', 'A']], ['A']));
console.log((itinerary([['A', 'C'], ['A', 'B'], ['B', 'C'], ['C', 'A']], ['A'])))