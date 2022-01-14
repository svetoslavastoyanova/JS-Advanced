function solve(...arguments) {
    let summary = {}
    for (const argument of arguments) {
        let types = typeof argument;
        console.log(`${types}: ${argument}`)

        if (!summary[types]) {
            summary[types] = 0;
        }
        summary[types] ++;
    }



    Object.keys(summary)
        .sort((a, b) => summary[b] - summary[a])
        .forEach((key) => console.log(`${key} = ${summary[key]}`));

}

solve('cat', 42, function () { console.log('Hello world!'); })