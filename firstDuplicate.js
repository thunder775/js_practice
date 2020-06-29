function firstDuplicate(a) {
    let counts = {};
    for(let i = 0 ;i<a.length;i++){
        if(counts[a[i]]!==undefined){
            counts[a[i]]+=1
        }else{
            counts[a[i]]=1
        }
    }
    for(let item in counts){
        if(counts[item]>=2){
            return item
        }
    }
    return -1

}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))