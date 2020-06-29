function containsCloseNums(nums=[], k=0) {
    let map = {};
    for(let index = 0;index<nums.length;index++){
        if(map[nums[index]]!==undefined){
            map[nums[index]][index]= null;
            let temp = map[nums[index]];
            for(let i = index-k;i<index;i++){
                if(temp[i]!==undefined){
                    return true
                }
            }
        }else{
            map[nums[index]]={
                [index] :null
            }
        }
    }
    return false
}
console.log(containsCloseNums([1, 0, 1, 1],1));