function findArea(input) {
    let circleArea;
    let inputType = typeof(input);
    if (inputType === 'number') {
        circleArea = Math.pow(input,2) *Math.PI;
        console.log(circleArea.toFixed(2));

    }else{
        console.log(`We can not calculate the circle area, because we receive a string.`);
    }
}

findArea(5)