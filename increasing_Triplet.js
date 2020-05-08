function increasingTriplet (nums) {
    let counter = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            counter = 0
        } else {
            counter++
        }
    }
    return counter >= 3;
};
increasingTriplet([1,2,3,4,5,]);