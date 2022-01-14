function sorting(array, command) {
    if (command === 'asc') {
        return array.sort((a, b) => a - b)
    }
    return array.sort((a,b) => b - a)
}

console.log(sorting([14, 7, 17, 6, 8], 'asc'))
console.log(sorting([14, 7, 17, 6, 8], 'desc'))