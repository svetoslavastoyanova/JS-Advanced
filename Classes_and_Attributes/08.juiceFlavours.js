function solve(array){
    let fruits = new Map();
    let bottles = new Map();

    for (let couple of array){
        let [fruit, quantity] = couple.split(' => ');
        quantity = Number(quantity);

        if (!fruits.has(fruit)){
            fruits.set(fruit, quantity);
        }else{
            fruits.get(fruit);
            //let fruit = currentQuantity[fruit];
            //let fruitQuantity = fruit.get(quantity);
            
        }

        if (fruits[fruit] >= 1000){
            let quantityLeft = String(fruits[fruit]);
            let bottle = Number(quantityLeft[0])
            let quantitytoAdd = Number(quantityLeft.slice(1));
            fruits[fruit] = quantitytoAdd;
            if (!bottles[fruit]){
                bottles[fruit] = 0;
            }
            bottles[fruit] += bottle;
            
        }
    }
    for (const [key, value] of Object.entries(bottles)) {
        console.log(`${key} => ${value}`);
      }
    
}


solve(['Kiwi => 234',
'Kiwi => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])