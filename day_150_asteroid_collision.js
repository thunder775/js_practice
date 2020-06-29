function getCollisions(asteroids = []) {
    let asteroidQueue = [];
    let currentPointer = 1;
    while (currentPointer < asteroids.length) {
        asteroidQueue.push(asteroids[currentPointer]);
        processAsteriodQueue(asteroidQueue);
        currentPointer++;
    }
    console.log(asteroidQueue);
    return asteroidQueue
}

function processAsteriodQueue(queue = []) {
    if (queue.length > 1) {
        let last = queue[queue.length - 1];
        let secondLast = queue[queue.length - 2];
        if (last < 0 && secondLast > 0) {
            queue.pop();
            queue.pop();
            if (Math.abs(last) !== Math.abs(secondLast)) {
                queue.push(Math.abs(last) > Math.abs(secondLast) ? last : secondLast);
            }
            processAsteriodQueue(queue);
        }
    }
}

// getCollisions([-1, 1, 1, -2]);
// getCollisions([5, 10, -5]);
// getCollisions([8, -8]);
// getCollisions([-2, -1, 1, 2]);
// getCollisions([-2, -2, -2, -2]);
// // console.log(queue);
function getCollision2(asteroids = []) {
    if (asteroids.length === 1) {
        return asteroids
    }
    let currentCounter = 1;
    while (currentCounter < asteroids.length) {
        let [last, secondLast] = [asteroids[currentCounter], asteroids[currentCounter - 1]]
        if (last < 0 && secondLast > 0) {
            asteroids.splice(currentCounter - 1, 2);
            if (Math.abs(last) !== Math.abs(secondLast)) {
                asteroids.splice(currentCounter - 1, 0, Math.abs(last) > Math.abs(secondLast) ? last : secondLast)
            }
            currentCounter--
        } else {
            currentCounter++;
        }
    }
    console.log(asteroids);
    return asteroids
}

getCollision2([-1, 1, 1, -2]);
getCollision2([5, 10, -5]);
getCollision2([8, -8]);
getCollision2([-2, -1, 1, 2]);
getCollision2([-2, -2, -2, -2]);