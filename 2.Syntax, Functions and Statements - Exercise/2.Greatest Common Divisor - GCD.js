function greatestDevisor(a,b) {
    let greatest;
    for (let index = 1; index <= b; index++) {
       
        if (a%index ==0 && b%index == 0) {
            greatest = index;
        }
        
    }
    console.log(greatest);

}
greatestDevisor(15, 5)