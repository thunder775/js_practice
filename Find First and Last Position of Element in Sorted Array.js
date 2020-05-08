function searchRange(nums, target, start, end) {
    // start=0;
    let mid = Math.floor(((end - start) / 2))+start;
    if (nums[mid] === target) {
        return mid;
    } else if (target > nums[mid]) {
        return searchRange(nums, target, mid, end)
    } else {
        return searchRange(nums, target, start, mid)
    }
}

console.log(searchRange([1, 1, 1, 2, 2, 3, 4], 1, 0, 6));