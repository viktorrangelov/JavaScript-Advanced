function giveTicketsArr(input,sortType){
    let inputArr = input;
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let ticketsArr = [];

    inputArr.forEach(element => {
        [destination,price,status] = element.split('|');
        price = Number(price);
        
        ticketsArr.push(new Ticket(destination,price,status)) ;
         
    });
    return ticketsArr.sort((a,b)=>{
        if (typeof a[sortType] === 'number') {
            
            return a[sortType] -b[sortType];

        }else{
            
            return a[sortType].localeCompare(b[sortType]);
        }
});
}

giveTicketsArr(['Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination')