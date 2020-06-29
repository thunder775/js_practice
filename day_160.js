function mergeAllLists(list = [{}]) {
    if (list.length === 0) return {};
    let resultList = {};
    let resultPtr = resultList;
    let minValue = Infinity;
    let indexToIncrement = Infinity;
    let foundSome = true;
    while (foundSome) {
        let found = 0;
        foundSome = false;
        for (let i = 0; i < list.length; i++) {
            let currentList = list[i];
            if (currentList !== undefined) {
                if (currentList.value !== undefined) found++;
                if (currentList.value < minValue) {
                    foundSome = true;
                    minValue = currentList.value;
                    indexToIncrement = i;

                }
            }
        }
        if (foundSome) {
            resultPtr.value = list[indexToIncrement].value;
            if (found > 1) resultPtr.next = {};
            resultPtr = resultPtr.next;
            list[indexToIncrement] = list[indexToIncrement].next;
            minValue = Infinity;
        }
    }
    console.log(JSON.stringify(resultList));
    return resultList;
}

let listA = {
    value: 2,
    next: {
        value: 3,
        next: {
            value: 7
        }
    }
};

let listB = {
    value: 1,
    next: {
        value: 5,
        next: {
            value: 8
        }
    }
};
let listC = {value: 6};
mergeAllLists([listA, listB, listC]);
mergeAllLists([{},{},{value:10}]);
