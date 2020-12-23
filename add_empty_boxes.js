let Input = [{item: "fruits", spaceOccupied: 4}, {item: "empty", spaceOccupied: 0}, {
    item: "fruits",
    spaceOccupied: 5
}, {item: "fruits", spaceOccupied: 0}, {item: "fruits", spaceOccupied: 9}, {item: "fruits", spaceOccupied: 0}];
let Output = [{item: "fruits", spaceOccupied: 4}, {item: "fruits", spaceOccupied: 5}, {
    item: "fruits",
    spaceOccupied: 9
}, {item: "empty", spaceOccupied: 0}, {item: "empty", spaceOccupied: 0}, {item: "empty", spaceOccupied: 0}];
//
// Note:
// 1. Do not make a copy of an array
// 2. Try to minimize the number of operations
function sortEmpty(input = []) {
    let emptyBoxes = input.filter(({item, spaceOccupied}) => spaceOccupied === 0).length;
    return  input.filter(({item, spaceOccupied}) => spaceOccupied !== 0).concat(Array(emptyBoxes).fill({
        item: "empty",
        spaceOccupied: 0
    }));
}

console.log(sortEmpty(Input));
function f() {
    return {
        tst:1
    }
}
console.log(typeof f())




