function calcPrice(fruit, weight, money) {
    let weightInKG = weight/1000
    let moneyNeeded = weightInKG*money
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`
    )
}

calcPrice('orange', 2500, 1.80)