function sorting(arr){
    arr.sort((a,b) => a.localeCompare(b));
    let orderNum = 1;
    arr.forEach((el)=> {
        console.log(`${orderNum}.${el}`);
        orderNum++;
    })
}

sorting(["John", "Bob", "Christina", "Ema"])
