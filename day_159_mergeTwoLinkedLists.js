function mergeTwoLinkedLists(list1 = {}, list2 = {}) {
    if (list1.value === undefined && list2.value !== undefined) {
        return list2;
    }
    if (list2.value === undefined && list1.value !== undefined) {
        return list1;
    }
    if (list1.value === undefined && list2.value === undefined) {
        return {}
    }
    let toAddInitially = Math.min(list1.value, list2.value);
    let ptr1 = list1.value === toAddInitially ? list1.next : list1;
    let ptr2 = list2.value === toAddInitially ? list2.next : list2;
    let finalList = {value: toAddInitially};
    let finalListPtr = finalList;
    if (ptr1.value !== list1.value && ptr2.value !== list2.value) {
        finalListPtr.next = {value: toAddInitially};
        finalListPtr = finalListPtr.next;
    }
    while (ptr1 !== undefined || ptr2 !== undefined) {
        let [val1, val2] = [ptr1 !== undefined ? ptr1.value : undefined, ptr2 !== undefined ? ptr2.value : undefined];
        if (val1 === undefined || val2 < val1) {
            finalListPtr.next = {value: val2};
            ptr2 = ptr2.next;
        } else if (val2 === undefined || val1 > val2) {
            finalListPtr.next = {value: val1};
            ptr1 = ptr1.next;
        } else {
            ptr2 = ptr2.next;
            ptr1 = ptr1.next;
            finalListPtr.next = {value: val1};
            finalListPtr = finalListPtr.next;
            finalListPtr.next = {value: val1};
        }
        finalListPtr = finalListPtr.next;
    }
    return finalList;
}

let listA = {
    value: 2,
    next: {
        value: 5,
        next: {
            value: 7
        }
    }
};

let listB = {
    value: 2,
    next: {
        value: 5,
        next: {
            value: 8,
            next: {
                value: 100
            }
        }
    }
};

console.log(JSON.stringify(mergeTwoLinkedLists(listA, listB)));