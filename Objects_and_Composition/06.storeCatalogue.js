function solve(array){
    result = {}
    array.sort((a, b) => a.localeCompare(b))

    for (let el of array) {
        let [object, price] = el.split(' : ');
        let firstLetter = object[0].toUpperCase();
        price = Number(price);

        if(!result[firstLetter]){
            result[firstLetter] = [{object, price}];
        }else{
            result[firstLetter].push({object, price});
            }
        }

        for(let letter in result){
            console.log(letter);
            for(let item of result[letter]){
                console.log(` ${item["object"]}: ${item["price"]}`)
            }
        }


    }


console.log(solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]))