function calculate(param1,param2,param3) {
    let totalLength = (param1+param2+param3).length;
    let avarageLength = (totalLength /3).toFixed(0);
    console.log(totalLength);
    console.log(avarageLength);
}
calculate('chocolate', 'ice cream', 'cake')