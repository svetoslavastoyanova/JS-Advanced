function print(list, n){
    const result = [];
    for (let i = 0; i < list.length; i+=n) {
        let number = i;
        result.push(list[number]);
    }
    
    return result;
}

console.log(print(['1', 
'2',
'3', 
'4', 
'5'], 
6))