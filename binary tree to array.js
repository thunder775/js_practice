function treeToArray(tree) {
    let result = [tree['value']];

    let pointer = 0;
    while (pointer <= result.length) {
        if (result[pointer] !== null) {
            result.push(findNode(tree, result[pointer]))
        } else {
            result.push(null);
            result.push(null)
        }
        while (result[result.length - 1] === null) {
            result.pop()
        }
        pointer++;
    }
    console.log(result);
}

function findNode(root, target) {
    if (root.value === target) {
        return [root.left !== undefined ? root.left.value : null, root.right !== undefined ? root.right.value : null]
    } else {
        if (root.left !== undefined) {
            if (findNode(root.left, target) !== undefined) {
                return findNode(root.left, target);
            }
        }
        if (root.right !== undefined) {
            if (findNode(root.right, target) !== undefined) {
                return findNode(root.right, target);
            }
        }
    }
    return undefined;
}


let tree = {
    value: 1,
    left: {
        value: 6,
        right: {
            value: 2,
            left: {
                value: 12
            },
            right: {
                value: 4
            }
        }
    },
    right: {
        value: 10,
        left: {
            value: 3,
            right: {
                value: 9
            }
        },
        right: {
            value: 7
        }
    }
};
console.log(treeToArray(tree));