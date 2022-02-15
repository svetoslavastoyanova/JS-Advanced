function solve(array){
    let result = {}
    for (let elements of array){
        let [town, product, price] = elements.split(' | ');
        price = Number(price);

        if (!result[product]) {
            result[product] = { town, price };
        } else {
            
            if(result[product].price > price) {
                result[product].price = price;
                result[product].town = town;
                continue
            }
            
            if(result[product] && result[product].town == town){
                result[product].price = price;
                for(let el of array){
                    let [town, product, price] = el.split(' | ');
                    price = Number(price);
                    if (result[product].price == price){
                        result[product].price = price;
                        result[product].town = town;
                        break
    
                    }
                }
            }
            
        }
        
    }
    for (let el in result) {
        console.log(`${el} -> ${result[el].price} (${result[el].town})`)
        }
    
    }

console.log(solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']))