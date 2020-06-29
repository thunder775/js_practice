function cipher(msg = '', keyword = '') {
    msg = msg.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    msg = msg.split(' ').map((subString) => subString.toLowerCase()).join('');
    let matrix = [];
    let temp = [];
    for (let i = 0; i < msg.length; i++) {
        temp.push(msg.charAt(i));
        if (temp.length === keyword.length) {
            matrix.push(temp);
            temp = [];
        }
    }
    if (temp.length !== 0) {
        temp = [...temp, ...Array(keyword.length - temp.length).fill('x')];
        matrix.push(temp)
    }
    let toReturn = '';
    let indexArray = keyword.split('').map((ele) => ele.charCodeAt(0));
    for (let i = 0; i < indexArray.length; i++) {
        let min = Infinity;
        let minIndex;
        for (let j = 0; j < indexArray.length; j++) {
            if (indexArray[j] !== undefined) {
                if (indexArray[j] < min) {
                    min = indexArray[j];
                    minIndex = j;
                }
            }
        }
        indexArray[minIndex] = undefined;
        let temp = [];
        for (let k = 0; k < matrix.length; k++) {
            temp.push(matrix[k][minIndex])
        }
        toReturn += temp.join('')

    }
    return toReturn
}

cipher("Meet me by the lake at midnight. Bring shovel.", "python");
console.log(cipher("Mission Delta Kilo Sierra has been compromised. Kill Steve. Evacuate", "cake") === "ioliiabcrsiteuxmieksrsnpiksecesdaoraemmdlvatxsntleheooelevax");
