function restaurantPairScores(restaurants = [1]) {
    let totalScore = 0;
    let minScore = Infinity;
    let maxScore = -Infinity;
    let totalPairs = 0;
    for (let i = 0; i < restaurants.length; i++) {
        for (let j = i + 1; j < restaurants.length; j++) {
            totalPairs++;
            let currentScore = (restaurants[i] + restaurants[j] + i - j);
            totalScore += currentScore;
            if (currentScore < minScore) {
                minScore = currentScore
            }
            if (currentScore > maxScore) {
                maxScore = currentScore
            }
        }
    }
    return [minScore, (totalScore / totalPairs), maxScore]
}


console.log(restaurantPairScores([8, 1, 5, 2, 6]));
// should return [1, 6.8, 11]