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
                     