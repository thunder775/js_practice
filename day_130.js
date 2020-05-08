function minTurns(current, target) {
    let result = 0;
    for (let i = 0; i < current.length; i++) {
        let x = parseInt(current.charAt(i));
        let y = parseInt(target.charAt(i));
        let absLength = Math.abs(x - y);
        let backwardLength = Math.min(x,y) + (10 - Math.max(x,y));
        result += Math.min(absLength, backwardLength);
    }
    console.log(result)
   return result;
}

minTurns("4089", "5672");
minTurns("4089", "5672") // 9

minTurns("1111", "1100") // 2

minTurns("2391", "4984") // 10
minTurns("0000", "9999") // 10