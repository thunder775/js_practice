function orderPeople(grid, people) {
    if (people > grid[0] * grid[1]) {
        return "overcrowded";
    }
    let space = [];
    for (let i = 0; i < grid[0]; i++) {
        space.push(Array(grid[1]).fill(0))
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
            space[i] = fillBackward(space[i], counter, people)
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

function fillBackward(row, number, last) {
    for (let i = row.length-1; i >= 0; i--) {
        if (number > last) break;
        row[i] = number;
        number++;
    }
    return row;
}

orderPeople([5, 3], 10);