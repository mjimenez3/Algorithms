class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getSummary() {
        return `My ${this.make} ${this.model} was made in ${this.year}`;
    }
    print() {
        console.log(this.getSummary());
    }
}

class Bike extends Vehicle {
    constructor(make, model, year, wheelsize) {
    super(make, model, year);
    this.wheelsize = wheelsize;
    }
}

const customer = new Vehicle('Honda', 'Pilot', 2011);
customer.print();

const tim = new Bike('cannondale', 'multisport', 2000, 700);
tim.print();