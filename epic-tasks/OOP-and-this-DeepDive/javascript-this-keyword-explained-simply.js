/* 
This file contains examples from the video
JavaScript this Keyword Explained Simply
*/

// EXAMPLE 1

function test() {
    console.log(this);
}

test();  // Window {}

// EXAMPLE 2

const user = {
    firstName: 'Patrick',
    lastName: 'Scott',
    fullName: function() {
        console.log(this),
        console.log(this.firstName + ' ' + this.lastName)
    }
}

user.fullName();  // { user object }  // this refers to 'user'
                  // Patrick Scott

// EXAMPLE 3

const user2 = {
    firstName: 'Patrick',
    lastName: 'Scott',
    fullName: () => {  // arrow functions inherit the nearest function's this scope
        console.log(this),
        console.log(this.firstName + ' ' + this.lastName)
    }
}

user2.fullName();  // Window (inherits global scope)
                   // undefined undefined

// EXAMPLE 4

const user3 = {
    firstName: 'Patrick',
    lastName: 'Scott',
    fullName: function() {  

        const arrowFunction = () => {  // arrow functions inherit the nearest function's this scope
            console.log(this),
            console.log(this.firstName + ' ' + this.lastName)
        }

        arrowFunction();
    }
}

user3.fullName();  // { user object }
                   // Patrick Scott

// EXAMPLE 5

const user4 = {
    firstName: 'Patrick',
    lastName: 'Scott',
    hobbies: ['programming', 'piano'],
    listHobbies: function() {
        this.hobbies.forEach(function(hobby) {
            console.log(hobby);  // programming // piano
            console.log(this.firstName);  // Patrick
                                          //  without second parameter on next line, this is undefined and refers to Window {}
        }, this);  // IMPORTANT!
    }
}

user4.listHobbies();

// EXAMPLE 6

function User(name) {
    this.name = name;
    console.log(this);
}

const devsage = new User('DevSage');
const codingphase = new User('CodingPhase');
