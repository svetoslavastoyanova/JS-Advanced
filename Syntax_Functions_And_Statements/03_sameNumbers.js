function extractNumbers(intNum) {
    const strNum = intNum.toString();
    let result = parseInt(strNum[0]);
    let isSame = true;
 
    for (let i = 1; i < strNum.length; i++) {
        result += parseInt(strNum[i]);
 
        if (strNum[i] !== strNum[i-1]) {
            isSame = false;
        }
    }
 
    console.log(isSame);
    console.log(result);
}

extractNumbers(2222222)