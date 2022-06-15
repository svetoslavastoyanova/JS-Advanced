class SummerCamp{
    constructor(organizer, location){
        this.organizer = organizer; //str
        this.location = location; //str
        this.priceForTheCamp  = {"child": 150, "student": 300, "collegian": 500}; //object
        this.listOfParticipants = []; // array
    };

    registerParticipant (name, condition, money){ // "Petar Petarson", "student", 200
        if(condition != "child" && condition != "student" && condition != "collegian") {
            throw Error(`Unsuccessful registration at the camp.`);
        }

        if(this.listOfParticipants.some(x => x.name === name) === true) {
            return `The ${name} is already registered at the camp.`;
        }

        let price = this.priceForTheCamp[condition];
        if (money < price) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let newParticipant = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(newParticipant);
        return `The ${name} was successfully registered.`;

    };

    unregisterParticipant (name){ // "Petar"
        let participant = this.listOfParticipants.find(x => x.name === name);

        if (participant == false) {
            throw Error(`The ${name} is not registered in the camp.`);
        };

        let index = this.listOfParticipants.indexOf(participant);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    };

    timeToPlay (typeOfGame, participant1, participant2){ // "WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
        if (typeOfGame == `WaterBalloonFights`) {
            let player1 = this.listOfParticipants.find(x => x.name == participant1);
            let player2 = this.listOfParticipants.find(x => x.name == participant2);
        

            if (player1.name == false || player2.name == false) {
                throw Error(`Invalid entered name/s.`);
            }

            if (player1.condition != player2.condition) {
                throw Error(`Choose players with equal condition.`);
            }

            if (player1.power > player2.power) {
                player1.wins += 1;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (player2.power > player1.power) {
                player2.wins += 1;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
    }else if(typeOfGame === `Battleship`) {
        let player1 = this.listOfParticipants.find(x => x.name === participant1);
        if (player1 == false) {
            throw Error(`Invalid entered name/s.`);
        }

        player1.power += 20;
        return `The ${participant1} successfully completed the game ${typeOfGame}.`;
    }

};

    toString () {
        let result = [];
        let numberOfParticipants = this.listOfParticipants.length;
        result.push(`${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}`);

        for (let player of this.listOfParticipants.sort((a,b) => b.wins - a.wins)) {
            result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
        }
        return result.join('\n');
    };


};

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());