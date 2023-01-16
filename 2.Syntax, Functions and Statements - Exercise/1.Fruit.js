function calculate(fruit,grams,pricePer1kg) {
    let kg = grams/1000;
    let price =  kg* pricePer1kg;

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
calculate('orange', 2500, 1.80)