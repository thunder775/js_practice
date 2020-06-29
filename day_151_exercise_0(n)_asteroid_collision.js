function getCollisions(asteroids = []) {
    if (asteroids.length === 1) return asteroids;
    let backQueue = [];
    backQueue.unshift(asteroids.pop());
    backQueue.unshift(asteroids.pop());
    do {
        let [first, second] = [backQueue[0], backQueue[1]];
        if (second < 0 && first > 0) {
            backQueue.shift();
            backQueue.shift();
            if (Math.abs(first) !== Math.abs(second)) {
                backQueue.unshift(Math.abs(first) > Math.abs(second) ? first : second);
            }
        }
        if (asteroids.length !== 0) backQueue.unshift(asteroids.pop());
    } while ((asteroids.length !== 0));
    console.log(backQueue);
    return backQueue
}

// getCollisions([-1, 1, 1, -2]);
// getCollisions([5, 10, -5]);
// getCollisions([8, -8]);
getCollisions([-2, -1, 1, 2]);
getCollisions([-2, -2, -2, -2]);
getCollisions([-2, 2, -1, -2]); // not passing
getCollisions([10, 2, -5]); // not passing