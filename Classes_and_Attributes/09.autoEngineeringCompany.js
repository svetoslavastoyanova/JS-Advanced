function solve(array){
    let arr = new Map();
    let resultString = [];

    for (let cars of array){
        let [carBrand, carModel, producedCars] = cars.split(' | ');

        if (!arr.has(carBrand)){
            arr.set(carBrand, new Map());
        }
        if (!arr.get(carBrand).has(carModel)) {
            arr.get(carBrand).set(carModel, 0);
        }
        let value = Number(arr.get(carBrand).get(carModel));
        arr.get(carBrand).set(carModel,value + Number(producedCars));
    }
    for ([brand,model] of arr.entries()) {
        let result = `${brand}\n`;
       for(let [name,quantity] of model.entries()){
        result += `###${name} -> ${quantity}\n`;
       } 
        resultString.push(result.trim());
    }
    return resultString.join('\n');
}

    
    

console.log(solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']))


