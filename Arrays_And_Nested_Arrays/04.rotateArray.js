function rotate(arr, n) {
    for (let i = 1; i <= n; i++){
        let element = arr.pop();
        arr.unshift(element);

    }
    console.log(arr.join(' '));
    
}



rotate(['1', 
'2', 
'3', 
'4'], 
2)