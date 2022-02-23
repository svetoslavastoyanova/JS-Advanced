function solve(arr) {
    let result = [];
    arr.shift();

    arr.forEach(el => {
        let [currTown, currLatitude, currLongtitude] = el.split('|').filter(el => el !== '').map(x => x.trim());
        result.push({ Town: currTown, Latitude: Number(Number(currLatitude).toFixed(2)), Longitude: Number(Number(currLongtitude).toFixed(2)) });
    })

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));