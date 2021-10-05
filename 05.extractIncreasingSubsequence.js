function solve(arr){
    const result = [];
    let biggestNum = 0;
    for (const el of arr){
        if (el >= biggestNum){
            biggestNum = el;
            result.push(el);
        }

    }
    return result;

}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])
