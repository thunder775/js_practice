function solve(string){
    let kicks = 0;
    let result =0;
    for(let i = 0;i<string.length;i++){
        if(i+3<=string.length-1){
            if(string.substring(i,i+4)==="KICK"){
                kicks++;
                i += 3
            }
        }
        if(i+4<=string.length-1){
            if(string.substring(i,i+5)==="START"){
                result+=kicks
                i += 4
            }
        }
    }
    return result
}
console.log(solve("AKICKSTARTPROBLEMNAMEDKICKSTART"))