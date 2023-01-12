function agregate(input) {
    let sum = 0;
    let otherSum = 0;
    let concat = '';
    input.forEach(element => {
        sum += Number(element);
        otherSum += 1/Number(element);
        concat += String(element)
    });

    console.log(sum);
    console.log(otherSum);
    console.log(concat);

}
agregate([1, 2, 3])