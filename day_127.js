let tree1 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                }]
        },
        {
            value: 3,
            children: []
        }
    ]
};

// console.log(whoIsTheParent(tree3,whoIsTheParent(tree3, 5)));
let tree21 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                }]
        },
        {
            value: 3,
            children: [
                {
                    value: 5,
                    children: [{
                        value: 8,
                        children: []
                    }]
                }
            ]
        }]
};
let tree3 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: [
                        {
                            value: 5,
                            children: [
                                {
                                    value: 8,
                                    children: []
                                }
                            ]
                        }
                    ]
                }]
        },
        {
            value: 3,
            children: [
                {
                    value: 0,
                    children: [
                        {
                            value: 12,
                            children: [
                                {
                                    value: 18,
                                    children: [{
                                        value: 777,
                                        children: []
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
// console.log(whoIsTheGrandParent(tree3, 777));

function whoIsTheGrandParent(tree, target) {
    let value = tree['value'];
    let children = tree['children'];
    for (let i = 0; i < children.length; i++) {
        let grandChildren = children[i]['children'];
        if (grandChildren.length !== 0) {
            for (let j = 0; j < grandChildren.length; j++) {
                if (grandChildren[j]['value'] === target) {
                    return value;
                } else {
                    if (whoIsTheGrandParent(children[i], target) !== undefined) return whoIsTheGrandParent(children[i], target);
                }
            }
        }
    }
    return undefined;
}

let tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4,
                    children: []
                },
                {
                    value: 33,
                    children: []
                }
            ]
        },
        {
            value: 3,
            children: [
                {
                    value: 5,
                    children: [
                        {
                            value: 8,
                            children: []
                        }
                    ]
                }
            ]
        }]
};

// console.log(whoIsTheGrandParent(tree2, 8));// should return 3
// console.log(whoIsTheGrandParent(tree2, 4));// should return 1
// console.log(whoIsTheGrandParent(tree2, 33));// should return 1
// console.log(whoIsTheGrandParent(tree2, 5));// should return 1
// console.log(whoIsTheGrandParent(tree2, 2)); // should return undefined


function whoIsTheParent(tree, target) {
    let parentValue = tree['value'];
    let children = tree['children'];
    for(let child of children){
        if(child['value']===target){
            return parentValue
        }else {
            if(child['children'].length!==0){
                if(whoIsTheParent(child,target)!==undefined) return whoIsTheParent(child,target)
            }
        }
    }
    return undefined;
}

console.log(whoIsTheParent(tree2, 5));
console.log(whoIsTheParent(tree2, 4));
console.log(whoIsTheParent(tree2, 1));
console.log(whoIsTheParent(tree2, 8));
