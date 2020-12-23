function getAllPossiblePaths(paths = [[]], source, target) {
    let result = [];
    let connectingPaths = paths.filter(([s1, s2, dist]) => s1 === source || s2 === source).map(([s1, s2, dist]) => [source, s1 === source ? s2 : s1, dist]);
    if (connectingPaths.length === 0) {
        return [];
    }
    for (let [src, tgt, dist] of connectingPaths) {
        paths = paths.filter(([s1, s2, target]) => !((s1 === src && s2 === tgt) || (s1 === tgt && s2 === src)));
        if (tgt === target) {
            result.push([[src, tgt, dist]])
        } else {
            let subPaths = getAllPossiblePaths(paths, tgt, target);
            let temp = [];
            for (let path of subPaths) {
                if (path.length !== 0) {
                    path.unshift([src, tgt, dist]);
                    result.push(path)
                }
            }
            if (temp.length !== 0) result.push(temp)
        }
    }
    return result;
}

function navigate(roads, source, target) {
    let edgesArray = roads.graph.edges.map(edge=>[edge.source, edge.target, edge.metadata.distance]);
    let possiblePaths = getAllPossiblePaths(edgesArray, source, target);
    let organisedPaths = [];
    for (let path of possiblePaths) {
        let nodes = new Set();
        let distance = 0;
        for (let [src, target, dist] of path) {
            nodes.add(src);
            nodes.add(target);
            distance += dist;
        }
        organisedPaths.push({
            distance: distance,
            path: Array.from(nodes.keys())
        })
    }

    return organisedPaths.reduce((a, b) => {
        return (b.distance - a.distance) > 0 ? a : b
    })
}

let roads = {
    "graph": {
        "directed": false,
        "nodes": [
            {"id": 0},
            {"id": 1},
            {"id": 2},
            {"id": 3}
        ],
        "edges": [
            {
                "source": 0,
                "target": 1,
                "metadata": {
                    "distance": 5
                }
            },
            {
                "source": 1,
                "target": 3,
                "metadata": {
                    "distance": 9
                }
            },
            {
                "source": 3,
                "target": 2,
                "metadata": {
                    "distance": 6
                }
            },
            {
                "source": 2,
                "target": 4,
                "metadata": {
                    "distance": 3
                }
            },
            {
                "source": 4,
                "target": 3,
                "metadata": {
                    "distance": 8
                }
            },
            {
                "source": 4,
                "target": 0,
                "metadata": {
                    "distance": 2
                }
            }
        ]
    }
};

console.log(navigate(roads, 2, 0));


// console.log(JSON.stringify(getAllPossiblePaths([
//     ['A', 'D', 5],
//     ['A', 'B', 5],
//     ['A', 'C', 5],
//     ['B', 'C', 5],
//     ['B', 'D', 5],
//     ['D', 'C', 5],
//
// ], 'B', 'A')));
// console.log(JSON.stringify(getAllPossiblePaths([
//     [ 0, 1, 5 ],
//     [ 1, 3, 9 ],
//     [ 3, 2, 6 ],
//     [ 2, 4, 3 ],
//     [ 4, 3, 8 ],
//     [ 4, 0, 2 ]
// ], 2, 0)));

