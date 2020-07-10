function groupEvenOdd(list) {
    if (list.value === undefined) {
        return {}
    }
    if (list.next === undefined) {
        return list
    }
    let oddPtr = list;
    let evenPtr = oddPtr.next;
    let oddList = {value: oddPtr.value};
    let evenList = {value: evenPtr.value};
    let oddListPtr = oddList;
    let evenListPtr = evenList
    while (evenPtr !== undefined) {
        if (evenPtr.next !== undefined) {
            oddPtr = evenPtr.next;
            oddListPtr.next = {value: oddPtr.value}
            oddListPtr = oddListPtr.next;
            evenPtr = oddPtr.next;
            if (evenPtr !== undefined) {
                evenListPtr.next = {value: evenPtr.value}
                evenListPtr = evenListPtr.next;
            }
        }else{
            break
        }

    }

    oddListPtr.next = evenList
    console.log(JSON.stringify(oddList))
    return oddList
}

// Example 1:
let input1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            // next: {
            //     value: 4,
            //     next: {
            //         value: 5
            //     }
            // }
        }
    }
};
// console.log(groupEvenOdd(input1)); // should return linked list with these values: 1->3->5->2->4

// Example 2:
let input2 = {
    value: 2,
    next: {
        value: 1,
        next: {
            value: 3,
            next: {
                value: 5,
                next: {
                    value: 6,
                    next: {
                        value: 4,
                        // next: {
                        //     value: 7
                        // }
                    }
                }
            }
        }
    }
};
console.log(groupEvenOdd(input2)); // should return linked list with these values: 2->3->6->7->1->5->4