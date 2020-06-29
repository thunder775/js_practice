function findWaterHeight(heights = [1], water = 10) {
    let currentWidth = 1;
    for (let i = heights.length; i > 1; i--) {
        let [last, secondLast] = [heights[i], heights[i - 1]];
        let currentAvailableHeight = secondLast - last;
        if (water < currentWidth * currentAvailableHeight) {
            return water;
        } else {
            water -= currentAvailableHeight - currentWidth;
            currentWidth++;
        }
    }
}

console.log(findWaterHeight([200, 150, 100], 100));