function boxShadows(rectangles = [[]]) {
    rectangles.sort((a, b) => a[0] - b[0]);
    console.log(rectangles);
    let linearMap = new Map();
    for (let [x, y, width, height] of rectangles) {
        let currentWidth = linearMap.get(x);
        if (currentWidth === undefined) {
            currentWidth = width + x
        } else {
            currentWidth = x + width > currentWidth ? width : currentWidth
        }
        linearMap.set(x, currentWidth)
    }
    // getRanges(linearMap)
    let linearArray = Array.from(linearMap.entries());
    console.log(linearArray)
    let ranges = [];
    for (let i = 0; i < linearArray.length - 1; i++) {
        for (let j = i + 1; i < linearArray.length - 1; j++) {

            let [s1, t1] = linearArray[i];
            let [s2, t2] = linearArray[j];
            if (s2 > t1) break;
            if (t1 >= t2) {
                linearArray.splice(j, 1);
                // ranges.push([s1, t1]);
                j--;
            } else if (t1 >= s2 && t2 > t1) {
                linearArray.splice(j, 1);
                // ranges.push([s1, t2]);
                linearArray[i] = [s1, t2];
                j--
            }
        }
    }
    console.log(linearArray)
    return linearArray;
}


// boxShadows([[12, 15, 1, 6], [4, 11, 6, 3], [19, 11, 4, 2], [7, 6, 2, 2], [13, 8, 7, 2]]);
boxShadows([[12, 15, 1, 6], [4, 11, 6, 3], [10, 11, 50, 2], [7, 6, 2, 2], [13, 8, 7, 2]]);