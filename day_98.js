// Part 1
// Write a recursive function which takes in a parameter 'n' and adds all the numbers from 1 to 'n'
function sum(n){
    if(n===1){
        return 1
    }else{
        return n+sum(n-1)
    }
}
// console.log(sum(12))



// Part 2
// Write a recursive function which takes in a parameter 'n' and multiplies all the numbers from 1 to 'n'
function fact(n){
    if(n===1){
        return 1
    }else{
        return n*fact(n-1)
    }
}

// fact(6)
// Write a general function which takes n and a callback to perform addition, multiplication, division, subtraction or any operation from 'n' to 1

function doArithematicOperationWithRecurrsion(n,callback){
    if(n===1){
        return 1
    }else{
        return callback(n,doArithematicOperationWithRecurrsion(n-1,callback))
    }
}
console.log(doArithematicOperationWithRecurrsion(1000,add))
console.log(doArithematicOperationWithRecurrsion(5,sub))
console.log(doArithematicOperationWithRecurrsion(5,mul))
console.log(doArithematicOperationWithRecurrsion(5000,div))
function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
function doArithematicOperation(n,callback){
    let output =[];
    for(i=n;i>0;i--){
        output.push(i)
    }
    let result = output.reduce((a,b)=>callback(a,b));
    return result
}
console.log(doArithematicOperation(1000,add))
console.log(doArithematicOperation(5,sub))
console.log(doArithematicOperation(5,mul))
console.log(doArithematicOperation(5000,div))