class Pagination {
    constructor(items = [], pageSize = 10) {
        this.pagesArray = this.getPages(items, pageSize);
        this.pointer = 0;
    }

    prevPage() {
        if (this.pointer !== 0) {
            this.pointer--;
            return this;
        }
    }

    firstPage() {
        this.pointer = 0
    }

    gotoPage(toPage = 1) {
        if (toPage >= 0 && toPage <= this.pagesArray.length - 1) {
            this.pointer = toPage;
        }
    }

    lastPage() {
        this.pointer = this.pagesArray.length - 1
    }

    nextPage() {
        if (this.pointer !== this.pagesArray.length - 1) {
            this.pointer++;
            return this;
        }
    }

    getVisibleItems() {
        return this.pagesArray[this.pointer]
    }

    getPages(items, pageSize) {
        let result = [];
        let sublist = [];
        for (let i = 0; i < items.length; i++) {
            sublist.push(items[i]);
            if (sublist.length === pageSize) {
                result.push(sublist);
                sublist = [];
            }
        }
        if (sublist.length !== 0) result.push(sublist);
        return result;
    }
}

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 5);
console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
p.nextPage().nextPage();
console.log(p.getVisibleItems());
// // ["e", "f", "g", "h"]
// p.prevPage()
// console.log(p.getVisibleItems());
// p.prevPage()
// console.log(p.getVisibleItems());
// p.lastPage();
//
// console.log(p.getVisibleItems());
// ["y", "z"]