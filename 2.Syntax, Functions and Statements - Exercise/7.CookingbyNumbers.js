function abusehim(givenNumber,op1,op2,op3,op4,op5) {
    let oneNumber = Number(givenNumber);
    let number = oneNumber;
    let result = number;
    
   
    let currentCommand = op1;
    calculate(currentCommand,number);
    number = result;
    currentCommand = op2;
    calculate(currentCommand,number);
    number = result;
    currentCommand = op3;
    calculate(currentCommand,number);
    number = result;
    currentCommand = op4;
    calculate(currentCommand,number);
    number = result;
    currentCommand = op5;
    calculate(currentCommand,number);
    number = result;
    
    function calculate(currentCommand, number) {
        switch (currentCommand) {
            case 'chop':
                result = number/2;
                number = result;
                console.log(result);
                break;
            case 'dice':
                result = Math.sqrt(number);
                number = result;
                console.log(result);
                break;
            case 'spice':
                result = number +1;
                number = result;
                console.log(result);
                break;
            case 'bake':
                result = number *3;
                number = result;
                console.log(result);
                break;
            case 'fillet':
                result = result - (result * 20)/100;
                number = result;
                console.log(result);
                break;
            default:
                break;
        }
        
        
    }
    
    number = result;

   
}

abusehim('9', 'dice', 'spice', 'chop', 'bake','fillet')