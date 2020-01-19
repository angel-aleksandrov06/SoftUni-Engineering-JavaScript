function byFruit(type, grams, price) {

    let weight = grams / 1000;
    let fruit = type;
    let money = price * weight;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}