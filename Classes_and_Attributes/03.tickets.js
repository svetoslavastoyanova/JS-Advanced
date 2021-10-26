function solve(ticketDescription, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compare(first, criteria){
            if(typeof this[criteria] == 'string'){
                return this[criteria].localeCompare(first[criteria]);
            }else{
                return this[criteria] - first[criteria];
            }

        }
    }

    let tickets = [];
    for (let index = 0; index < ticketDescription.length; index ++){
        let [destination, price, status] = ticketDescription[index].split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);

    }

    tickets.sort((a, b) => a.compare(b, sortingCriteria));
    return tickets;

}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'))