class SortedLinkedList {
    constructor(comp = () => {
    }) {
        this.comparator = comp;
    }

    _sortLinkedList() {
        let ptr = this.head;
        let valuesArray = [];
        while (ptr !== undefined) {
            valuesArray.push(ptr.value);
            ptr = ptr.next;
        }
        valuesArray.sort(this.comparator);
        if (valuesArray.length !== 0) {
            let temp = {value: valuesArray[0]};
            let ptr2 = temp;
            for (let i = 1; i < valuesArray.length; i++) {
                ptr2.next = {value: valuesArray[i]};
                ptr2 = ptr2.next;
            }
            this.head = temp;
        }
    }


    head;

    add(value) {
        if (this.head === undefined) {
            this.head = {value: value};
        } else {
            if (this.head.value >= value) {
                this.head = {
                    value: value, next: this.head
                }
            } else {
                let ptr = this.head;
                while (ptr.next !== undefined && ptr.next.value < value) {
                    ptr = ptr.next;
                }
                if (ptr.next === undefined) {
                    ptr.next = {value: value}
                } else {
                    let ptr2 = ptr.next;
                    ptr.next = {value: value};
                    ptr.next.next = ptr2;
                }
            }
        }
        this._sortLinkedList();
    }

    remove(value) {
        let ptr = this.head;
        if (ptr === undefined) {
            return false;
        }
        while (ptr !== undefined && ptr.next.value !== value) {
            ptr = ptr.next;
        }
        if (ptr === undefined) {
            return false;
        } else {
            ptr.next = ptr.next.next;
            this._sortLinkedList()
            return true
        }
    }

    toString() {
        let iterator = this.head;
        let resultString = '[ ';
        while (iterator !== undefined) {
            resultString += iterator.value + ', ';
            iterator = iterator.next
        }
        resultString += ']';
        return resultString;
    }
}

let scores = new SortedLinkedList((a, b) =>a-b);
scores.add(54);
scores.add(33);
scores.add(91);
scores.add(44);
scores.add(63);

console.log(scores.head);
console.log(`${scores}`); // Should print [33, 44, 54, 91];
//
console.log(scores.remove(44)); // Should print true
console.log(`${scores}`);
let students = new SortedLinkedList((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
students.add('Raj');
students.add('Mark');
students.add('Arnav');
students.add('Ramesh');
console.log(`${students}`);// should print [Arnav, Mark, Ramesh, Raj]