// res.sort(([teamAName,teamAPoints,teamAGoals,teamAGD],[teamBName,teamBPoints,teamBGoals,teamBGD])=>{
//     if(teamAPoints!==teamBPoints) return teamBPoints-teamAPoints;
//     else if(teamAGoals!==teamBGoals) return teamBGoals-teamAGoals;
//     else return teamBGD-teamAGD
// });
// Array.from(teamStatsMap.entries()).sort(([teamA, statsA], [teamB, statsB]) => {
//     if (statsA.totalPoints !== statsB.totalPoints) {
//         return statsB.totalPoints - statsA.totalPoints;
//     }
//     if (statsA.totalGoalsScored !== statsB.totalGoalsScored) {
//         return statsB.totalGoalsScored - statsA.totalGoalsScored;
//     }
//     return statsB.diffGoalsScored - statsA.diffGoalsScored;
// });

function tournamentScores(matchArray = ['', '']) {
    let teamDataMap = new Map();
    matchArray.forEach((matchString) => {
        let [team1, team2] = matchString.split(' - ');
        let [team1Name, team2Name] = [team1.split(' ')[0], team2.split(' ')[1]];
        let [team1Goals, team2Goals] = [Number(team1.split(' ')[1]), Number(team2.split(' ')[0])];
        addToMap(teamDataMap, team1Name, team1Goals, team2Goals);
        addToMap(teamDataMap, team2Name, team2Goals, team1Goals);
    });
    return Array.from(teamDataMap.entries()).sort(([teamA, statsA], [teamB, statsB]) => {
        if (statsA.totalPoints !== statsB.totalPoints) {
            return statsB.totalPoints - statsA.totalPoints;
        }
        if (statsA.totalGoalsScored !== statsB.totalGoalsScored) {
            return statsB.totalGoalsScored - statsA.totalGoalsScored;
        }
        return statsB.diffGoalsScored - statsA.diffGoalsScored;
    }).map(([teamName, {totalPoints, totalGoalsScored, diffGoalsScored}]) => [teamName, totalPoints, totalGoalsScored, diffGoalsScored]);
}

function addToMap(teamDataMap = new Map(), team1Name = '', team1Goals = 1, team2Goals = 1) {
    let teamData = teamDataMap.get(team1Name);
    if (teamData === undefined) {
        teamData = {
            totalPoints: team1Goals > team2Goals ? 3 : (team1Goals === team2Goals ? 1 : 0),
            totalGoalsScored: team1Goals,
            diffGoalsScored: team1Goals - team2Goals
        };
        teamDataMap.set(team1Name, teamData);
    } else {
        teamData.totalPoints += team1Goals > team2Goals ? 3 : (team1Goals === team2Goals ? 1 : 0);
        teamData.totalGoalsScored += team1Goals;
        teamData.diffGoalsScored += team1Goals - team2Goals;
    }
}

console.log(tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"]))
console.log(tournamentScores(["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"]))
console.log(tournamentScores(["C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D", "A 2 - 1 B"]))
//[Team, PT, GS, GD]
