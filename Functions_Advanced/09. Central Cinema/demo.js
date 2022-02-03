function solve(array){
    let fruits = new Map();
    let bottles = new Map();

    for (let couple of array){
        let [fruit, quantity] = couple.split(' => ');
        quantity = Number(quantity);

        if (!fruits.has(fruit)){
            fruits.set(fruit, quantity);
        }else{
            let oldQuantity = fruits.get(fruit) + quantity;
            fruits.set(fruit, oldQuantity);
            
        }

        if (fruits.get(fruit) >= 1000){
            let quantityLeft = String(fruits.get(fruit));
            let bottle = Number(quantityLeft[0])
            let quantitytoAdd = Number(quantityLeft.slice(1));
            fruits.set(fruit, quantitytoAdd);
            if (!bottles.has(fruit)){
                bottles.set(fruit, 0);
            }
            let oldQuantity = bottles.get(fruit) + bottle;
            bottles.set(fruit, oldQuantity);
            
        }
    }

    for(let [key, value] of bottles){
        console.log(`${key} => ${value}`);
    }
    
}


solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])