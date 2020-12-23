function climbingLeaderboard(scores, alice) {
    scores = scores.map(val => [val, -1]);
    alice = alice.map((val, ind) => [val, ind])
    let finalArray = scores.concat(alice).sort((a, b) => b[0] - a[0]);
    let ranks = Array(alice.length).fill(-1);
    let currentRank = 1;
    let prevMax = scores[0][0];
    let counted = 0;
    for (let i = 0; i < finalArray.length; i++) {
        let [val, index] = finalArray[i];
        if (counted < scores.length) {
            if (index !== -1) {
                ranks[index] = val<prevMax?currentRank+1:currentRank;
            } else {
                counted++;
                if (val < prevMax) {
                    currentRank++;
                    prevMax = val
                }

            }
        } else {
            if (val < prevMax) {
                currentRank++;
                prevMax = val
            }
            ranks[index] = currentRank;

        }
    }
    console.log(finalArray);
    console.log(ranks)
}

climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120 ])
