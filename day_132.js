function cropHydrated(field) {
    if (field.length === 1 && field[0].length === 1 && field[0][0] === 'w') {
        return true;
    }
    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[row].length; col++) {
            if (field[row][col] === 'w') {
                hydrateAdjacent(row, col, field);
            }
        }
    }
    console.log(field);
    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[0].length; col++) {
            if (field[row][col] === 'c' || field[row][col] === 'z') {
                return false;
            }
        }
    }
    return true;
}

function hydrateAdjacent(row, col, field) {
    let offsets = [-1, 0, 1];
    for (let i = 0; i < offsets.length; i++) {
        for (let j = 0; j < offsets.length; j++) {
            if ([row + offsets[i]] < 0 || [col + offsets[j]] < 0 || [row + offsets[i]] > field.length - 1 || [col + offsets[j]] > field[0].length - 1) {

            } else {
                if (field[row + offsets[i]][col + offsets[j]] === '2') {
                    field[row + offsets[i]][col + offsets[j]] = '3'
                }else if (field[row + offsets[i]][col + offsets[j]] === '1') {
                    field[row + offsets[i]][col + offsets[j]] = '2'
                }else if (field[row + offsets[i]][col + offsets[j]] !== 'w') {
                    field[row + offsets[i]][col + offsets[j]] = '1'
                }
            }
        }
    }
}


console.log(cropHydrated([
    [ "w", "c", "c", "c" ],
    [ "c", "c", "c", "w" ],
    [ "c", "w", "c", "c" ]
]));console.log(cropHydrated([
    [ "w", "c", "c", "w" ],
    [ "c", "c", "c", "c" ],
    [ "c", "w", "c", "w" ]
]));console.log(cropHydrated([
    [ "w", "c", "c", "w" ],
    [ "c", "c", "w", "c" ],
    [ "c", "c", "c", "c" ]
]));

