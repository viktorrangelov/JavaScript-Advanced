function calculator(a,b,operator) {
    let result;

    switch (operator) {
        case '+':
            result = a +b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            result = a/b;
            break;
        case '%':
            result = a%b;
            break;
        case '**':
            result = a**b;

            break;
    
        default:
            break;
    }
    console.log(result);
}
calculator(5, 6, '+');