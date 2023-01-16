function isSame(input) {
    let isTrue = true;
    let sum = 0;
    let numbersArr = input.toString().split('');
    for (let index = 0; index < numbersArr.length-1; index++) {
        let currentNumber = Number(numbersArr[index]);
       
        let nextNumber = Number(numbersArr[index+1]);
        sum += Number(numbersArr[index]);
       
            if (currentNumber != nextNumber) {
                isTrue = false;
             }
        
       
        
    }
    console.log(isTrue);
    console.log(sum + Number(numbersArr.pop()));
}

isSame(1234)