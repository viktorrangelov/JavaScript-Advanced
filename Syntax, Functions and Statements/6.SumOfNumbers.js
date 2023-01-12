function sum(a,b){
    let result = 0;
    for (let index = Number(a); index <= Number(b); index++) {
        result += index;
        
    }
    console.log(result);
}

sum('1','5')