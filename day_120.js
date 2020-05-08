function majorityVote(votes) {
    if(votes.length===0){
        return null;    }
    let votesCount = {};
    votes.forEach((vote) => {
        if (votesCount.hasOwnProperty(vote)) {
            votesCount[vote] += 1;
        } else {
            votesCount[vote] = 1;
        }
    });

    for (let vote in votesCount) {
        if (votesCount[vote] > (votes.length / 2)) {
            return vote;
        }
    }
    return null;
}

console.log(majorityVote(["A", "A", "B"])); // "A"

console.log(majorityVote(["A", "A", "A", "B", "C", "A"])); // "A"

console.log(majorityVote(["A", "B", "B", "A", "C", "C"]));// null