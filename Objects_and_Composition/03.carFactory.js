function createCar(car) {
    if (car.power <= 90) {
        car.power = 90;
        car.volume = 1800;
    } else if (car.power <= 120) {
        car.power = 120;
        car.volume = 2400;
    } else {
        car.power = 200;
        car.volume = 3500;
    }

    if (car.wheelsize % 2 == 0) {
        car.wheelsize -= 1;
    }
    car.wheelsize = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]

    const newCar = {
        model: car.model, 
        engine: {
            power: car.power,
            volume: car.volume,
        },
        carriage: {
            type: car.carriage,
            color: car.color,
        },
        wheels: car.wheelsize,    
    }
    
    return newCar;
}


console.log(createCar({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))