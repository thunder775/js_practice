function asteroidCollision(asteroids) {
    while (asteroids.length > 1) {
        for (let i = 1; i < asteroids.length; i++) {
            let [asteroidX, asteroidY] = [asteroids[i - 1], asteroids[i]];
            console.log(i);
            while (asteroidX > 0 && asteroidY < 0&&i>=1) {
                if (Math.abs(asteroidX) === Math.abs(asteroidY)) {
                    console.log(`A`);
                    asteroids.splice(i - 1, 2)
                } else if (Math.abs(asteroidX) < Math.abs(asteroidY)) {
                    console.log('B');
                    asteroids.splice(i - 1, 1)
                } else {
                    console.log('C');
                    asteroids.splice(i, 1)
                }
                i = i - 1;
                [asteroidX, asteroidY] = [asteroids[i - 1], asteroids[i]];
            }
            if (i === asteroids.length - 1) {
                    return asteroids
            }
        }
        console.log('E');
    }
    console.log('F');
    return asteroids
}
asteroidCollision([1,1,-2,-2]);