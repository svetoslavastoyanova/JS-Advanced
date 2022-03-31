function solve(num, command1, command2, command3, command4, command5) {
    let array = [num, command1, command2, command3, command4, command5];
    let number = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'chop') {
            number /= 2;
        } else if (array[i] == 'dice') {
            number = Math.sqrt(number);
        } else if (array[i] == 'spice') {
            number += 1;
        } else if (array[i] == 'bake') {
            number *= 3;
        } else if (array[i] == 'fillet') {
            number = (number * 0.80).toFixed(2);
        }
        console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
//cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);