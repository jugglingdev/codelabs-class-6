// Exercise 1

function globalFunction() {
    console.log(`Global Function: ${this}`);
}

const myObject = {
    name: 'Object Method',
    printThis: function() {
        console.log(`${this.name}: ${this}`);
    }
}

const myOtherObject = {
    name: 'Object Arrow Function',
    printThis: () => {
        console.log(`${this.name}: ${this}`);
    }
}

globalFunction();  // Global Function: [object global]
myObject.printThis();  // Object Method: [object Object]
myOtherObject.printThis();  // undefined: [object Object]
                            // The arrow function here won't work

// Exercise 2



// Exercise 3

// Exercise 4

// Exercise 5
