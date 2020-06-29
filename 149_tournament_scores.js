function tournamentScores(matchArray = ['', '']) {
    let teamDataMap = new Map();
    matchArray.forEach((matchString) => {
        let [team1, team2] = matchString.split(' - ');
        let [team1Name, team2Name] = [team1.split(' ')[0], team2.split(' ')[1]];
        let [team1Goals, team2Goals] = [Number(team1.split(' ')[1]), Number(team2.split(' ')[0])];
        addToMap(teamDataMap,team1Name,team1Goals,team2Goals);
        addToMap(teamDataMap,team2Name,team2Goals,team1Goals);
    });
    let result = [...teamDataMap.entries()].map((array) => [array[0], ...array[1]]);
    result.sort(([team1, pt1, gs1, gd1], [team2, pt2, gs2, gd2]) => {
        if (pt1 > pt2) return -1;
        if (pt2 > pt1) return 1;
        if (pt1 === pt2) {
            if (gs1 > gs2) return -1;
            if (gs2 > gs1) return 1;
            if (gs2 === gs1) {
                if (gd1 > gd2) return -1;
                if (gd2 > gd1) return 1;
            }
        }
    });
  return result;
}

function addToMap(teamDataMap = new Map(), team1Name = '', team1Goals = 1, team2Goals = 1) {
    if (teamDataMap.get(team1Name) !== undefined) {
        let teamData = teamDataMap.get(team1Name);
        teamData[0] += team1Goals > team2Goals ? 3 : (team1Goals === team2Goals ? 1 : 0);
        teamData[1] += team1Goals;
        teamData[2] += team1Goals - team2Goals;
        teamDataMap.set(team1Name, teamData)
    } else {
        teamDataMap.set(team1Name, [team1Goals > team2Goals ? 3 : (team1Goals === team2Goals ? 1 : 0), team1Goals, team1Goals-team2Goals])
    }
}
tournamentScores(["A 0 - 1 B", "C 2 - 0 D", "B 2 - 2 C", "D 3 - 1 A", "A 2 - 2 C", "B 2 - 0 D"])
tournamentScores(["A 4 - 0 B", "C 2 - 1 D", "B 1 - 0 C", "D 3 - 2 A", "A 1 - 3 C", "B 2 - 1 D"])
tournamentScores(["C 3 - 0 D", "B 1 - 1 C", "D 1 - 0 A", "A 3 - 0 C", "B 2 - 4 D", "A 2 - 1 B"])
//[Team, PT, GS, GD]
