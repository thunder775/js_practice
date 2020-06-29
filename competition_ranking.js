function competitionRank(scores = {}, competitors = []) {
    let scoresArray = [];
    for (let person in scores) {
        scoresArray.push([person, scores[person]])
    }
    scoresArray = scoresArray.sort((a, b) => b[1] - a[1]);
    let finalMap = new Map();
    let currentRank = 1;
    let currentScore = scoresArray[0][1];
    for (let [person, personsScore] of scoresArray) {
        if (currentScore !== personsScore) {
            currentRank += 1;
        }
        currentScore = personsScore;
        finalMap.set(person, currentRank);
    }
    console.log(finalMap);
    // console.log(competitors.map((competitor) => finalMap.get(competitor)));
    return competitors.map((competitor) => finalMap.get(competitor));
}

console.log(competitionRank({
    Susan: 93,
    Jane: 89,
    Brett: 82,
    George: 96,
    Emily: 95
}, ["George", "Brett", "Susan"])); // should print [1, 5, 3]

console.log(competitionRank({
    Kate: 92,
    Carol: 92,
    Jess: 87,
    Bruce: 87,
    Scott: 84
}, ["Bruce", "Kate"])); // should print [2, 1]