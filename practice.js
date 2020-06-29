function alternatingSort(a) {
    if(a.length===1) return true
    let fwd = 0 ;
    let bwd = a.length-1;
    while(fwd<bwd){
        let f = a[fwd]
        let b = a[bwd]
        if(a[fwd]>=a[bwd]) return false
        fwd++;
        bwd--;
    }
    if(fwd===bwd){
        return a[fwd]>a[bwd+1]
    }
    return true
}
alternatingSort([-92, -23, 0, 45, 89, 96, 99, 95, 89, 41, -17, -48])