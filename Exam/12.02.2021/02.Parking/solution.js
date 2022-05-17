class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.');
        }
        let car = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false,
        }
        this.vehicles.push(car);
        return (`The ${carModel}, with a registration number ${carNumber}, parked.`);
    }

    removeCar(carNumber) {
        let vehicle = this.vehicles.find(v => v.carNumber === carNumber);

        if (vehicle === undefined) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if (vehicle.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } 
        let index = this.vehicles.indexOf(vehicle);
        this.vehicles.splice(index, 1);

        return `${carNumber} left the parking lot.`;
    }
    pay(carNumber) {
        let vehicle = this.vehicles.find(v => v.carNumber === carNumber);
        if (vehicle === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (vehicle.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        vehicle.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;

    }
    getStatistics(carNumber) { 
        if (carNumber === undefined) {
            let emptySlots = this.capacity - this.vehicles.length;
            let message = `The Parking Lot has ${emptySlots} empty spots left.`;

            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            let message2 = '';
            for (const vehicle of sorted) {
                message2 += `\n${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed === true ? 'Has payed' : 'Not payed'}`;
            }
            return message + message2;

        } else {
            let vehicle = this.vehicles.find(v => v.carNumber === carNumber);
            return `${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed === true ? 'Has payed' : 'Not payed'}`;
        }
    }

}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

//console.log(parking.removeCar("AAAAA111"));
