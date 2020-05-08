class LoadBalancer {
    replicaList = [];
    range = [];
    constructor(replicaList) {
        this.replicaList = replicaList;
        this.range = getRanges(replicaList);
    }

    chooseReplica() {

        let event = Math.floor(Math.random() * 100);
        for (let i = 0; i < this.range.length; i++) {
            if (event < this.range[i]) {
                return this.replicaList[i].replica;
            }
        }

    }

}

function getRanges(list) {
    let total = 0;
    list.forEach((replica) => {
        total += replica.load;
    });
    let probabilities = [];
    list.forEach((replica) => {
        probabilities.push((replica.load / total) * 100);
    });
    let sum = 0;
    let range = [];
    for (let i = 0; i < probabilities.length; i++) {
        sum += probabilities[i];
        range.push(sum);
    }
    return range;
}


function getReplicas() {
    let balancer = new LoadBalancer(
        [
            {replica: "replica1", load: 1},
            {replica: "replica2", load: 1},
            {replica: "replica3", load: 2}
        ]
    );
    for(let i = 0 ; i <10;i++){
        console.log(balancer.chooseReplica())
    }
}

getReplicas();
