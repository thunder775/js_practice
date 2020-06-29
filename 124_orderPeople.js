function orderPeople(grid, people) {
    let [row,col] = grid;

    if (people > row * col) {
        return "overcrowded";
    }
    let space = [];
    for (let i = 0; i < row; i++) {
        space.push(Array(col).fill(0))
    }
    // console.log(space);
    let counter = 1;
    for (let i = 0; i < space.length; i++) {
        if (counter > people) {
            break;
        }
        if (i % 2 == 0) {
            space[i] = fillForward(space[i], counter, people)

        } else {
            space[i] = fillForward(space[i], counter, people).reverse()
        }
        counter+=space[i].length;
    }

    space.forEach((row)=>console.log(row));
    return space;
}

//
function fillForward(row, number, last) {
    for (let i = 0; i < row.length; i++) {
        if (number > last) break;
        row[i] = number;
        number++;

    }
    return row;
}


orderPeople([5, 3], 10);