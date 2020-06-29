function resist(resistors) {
    let temp = 'abc';
    while (isNaN(resistors)) {
        resistors = resistors.replace(/\([\d*\.{0,1}\d*, ]*\)/gm, (m, g) => {
            return handleSeries(m);
        }).replace(/\[[\d*\.{0,1}\d*, ]*\]/gm, (m, g) => {
            return handleParallel(m);
        })
    }
    console.log(resistors);
    return Number(resistors);
}

function handleSeries(resistors) {
    let values = resistors.toString().substring(1, resistors.length - 1).split(', ');
    values = values.map((value) => Number(value));
    return (values.reduce((a, b) => a + b)).toFixed(1);
}

function handleParallel(resistors) {
    let values = resistors.toString().substring(1, resistors.length - 1).split(', ');
    values = values.map((value) => Number(value));
    let sum = 0 ;
    for(let i = 0 ;i<values.length;i++){
       sum+=(1/values[i])
    }
    return 1/sum;
}
// console.log(handleParallel('[12, 4, 6]'))

resist("(10, [20, 30])") // 22.0
// 10 in series with [20, 30] in parallel.

resist("[10, (20, 30)]") // 8.3
// // 10 in parallel with (20, 30) in series.
//
console.log(resist("([10, 20], (30, 40))")) // 76.7
// // [10, 20] in parallel in series with (30, 40) in series.

resist("(1, [12, 4, (1, [10, (2, 8)])])") // 3.0

resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])") // 10