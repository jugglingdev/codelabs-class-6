class Car {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(
            `Make: ${this.make}` + 
            `\nModel: ${this.model}` + 
            `\nYear: ${this.year}`
        );
    }
}

const myCar = new Car('Toyota', 'Camry', 2003);
myCar.displayInfo();  /* 
                        Make: Toyota
                        Model: Camry
                        Year: 2003
                      */


class ElectricCar extends Car {

    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }

    displayInfo() {
        console.log(
            `Make: ${this.make}` + 
            `\nModel: ${this.model}` + 
            `\nYear: ${this.year}` 
        );
    }
}

const prius = new ElectricCar('Toyota', 'Prius', 2020, '150,000 miles');

prius.displayInfo();  /*
                        Make: Toyota
                        Model: Prius
                        Year: 2020
                      */

