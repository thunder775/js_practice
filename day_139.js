function resist(resistors) {
    let seriesStack = [];
    let parallelStack = [];
    let previous = resistors.charAt(0) === '(' ? 's' : 'p';
    let rTotal = 0;
    for (let i = 0; i < resistors.length; i++) {
        if (resistors.charAt(i) === '(') {
          if(rTotal!==0){
              if (previous === 'p') {
                  parallelStack.push(rTotal)
              } else {
                  seriesStack.push(rTotal);
              }
          }
            rTotal = 0;
            previous = 's';
        } else if (resistors.charAt(i) === '[') {
            if(rTotal!==0){
                if (previous === 'p') {
                    parallelStack.push(rTotal)
                } else {
                    seriesStack.push(rTotal);
                }
            }
            previous = 'p';
            rTotal = 0;
        } else if (resistors.charAt(i) === ')') {
            if (previous === 's') {
                continue;
            }
            rTotal += seriesStack.pop();
        } else if (resistors.charAt(i) === ']') {
            if (previous === 'p') {
                continue;
            }
            let temp = parallelStack.pop();
            if (rTotal === 0) {
                rTotal = temp;
            } else {
                rTotal = (rTotal * temp) / (rTotal + temp);
            }
        } else if (resistors.charAt(i) !== ' ') {
            if (!isNaN(resistors.charAt(i))) {
                let j = i;
                while (!isNaN(resistors.charAt(j))) {
                    j++;
                }
                let num = parseInt(resistors.substring(i, j + 1));
                i = j - 1;
                if (previous === 's') {
                    rTotal += num
                } else {
                    if (rTotal === 0) {
                        rTotal = num;
                    } else {
                        rTotal = (rTotal * num) / (rTotal + num);
                    }
                }
            }
        }
    }
    console.log(rTotal)
}

// resist("(10, [20, 30])")
// // 10 in series with [20, 30] in parallel.
//
// resist("[10, (20, 30)]")
// 10 in parallel with (20, 30) in series.

resist("([10, 20], (30, 40))")
// [10, 20] in parallel in series with (30, 40) in series.
//
// resist("(1, [12, 4, (1, [10, (2, 8)])])")
//
// resist("(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])")