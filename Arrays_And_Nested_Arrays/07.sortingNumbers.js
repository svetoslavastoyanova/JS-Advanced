function solve(arr){
    result = [];
    while(arr.length != 0){
        let minNum = Math.min(...arr);
        let maxNum = Math.max(...arr);
        let currentNum = arr.shift();
        if (currentNum > minNum){
            minNum = currentNum;
            result.push(minNum);
        }
        else if (currentNum > maxNum){
            maxNum = currentNum;
            result.push(maxNum);
        }
    }
    return result;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))