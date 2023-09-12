// Exercise 1

console.groupCollapsed('Exercise 1');

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

console.groupEnd();

// Exercise 2

class Person {

    name;
    age;

    get name() {
        return this.name;
    }

    set name(name) {
        return this.name = name;
    }

    greet() {
        console.log(`Howdy, ${this.name}!`);
    }
}

console.groupCollapsed('Exercise 2');

    const mary = new Person();
    mary.name = 'Mary';
    mary.greet();

    const gary = new Person();
    gary.name = 'Gary';
    gary.greet();

console.groupEnd();

// Exercises 3 and 4

class Person2 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Howdy, ${this.name}!`);
    }

    static info() {
        return `This is a Person class`;
    }
}

console.groupCollapsed('Exercise 3');

    const bud = new Person2('Bud', 42);
    const chelsea = new Person2('Chelsea', 13);

    bud.greet();  // Howdy, Bud!
    chelsea.greet();  // Howdy, Chelsea!

console.groupEnd();


console.groupCollapsed('Exercise 4');

    console.log(Person2.info());  // This is a Person class
    // console.log(bud.info());  // bud.info is not a function

console.groupEnd();

// Exercise 5

class Person3 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get personAge() {
        return this.age;
    }

    set personAge(age) {
        this.age = (age > 0) ? age : 'Invalid age';
    }
}

console.groupCollapsed('Exercise 5');

    const millie = new Person3('Millie', 32);
    millie.personAge = -23;
    console.log(millie.personAge);  // Invalid age

console.groupEnd();

// Exercise 6

console.groupCollapsed('Exercise 6');
    console.log('See file "class-6-private-fields-in-classes"');
console.groupEnd();

// Exercise 7

class Library {

    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(ISBN) {
        const index = this.books.findIndex((book) => book.getISBN() == ISBN)
        if (index != -1) {  // findIndex() will return -1 if a book is not found
            this.books.splice(index, 1);
            console.log(`Book with ISBN ${ISBN} removed successfully.`);
        } else {
            console.log(`Book with ISBN ${ISBN} not found.`);
        }
    }

    listAllBooks() {
        console.log('Library Book List:');
        this.books.forEach((book) => {
            console.log(`Title: ${book.title}`);
        });
    }
}

class Book {
    #ISBN;
    title;
    author;
    yearPublished;

    constructor(ISBN, title, author, yearPublished) {
        this.#ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    getISBN() {
        return this.#ISBN;
    }
}

console.groupCollapsed('Exercise 7');

    const myLibrary = new Library();

    const book1 = new Book('123456789', 'A Fun Book', 'John Smith', 2020);
    const book2 = new Book('987654321', 'A Funner Book', 'Jane Smith', 2021);

    myLibrary.addBook(book1);
    myLibrary.addBook(book2);

    myLibrary.listAllBooks();

    myLibrary.removeBook('123456789');

    myLibrary.listAllBooks();

console.groupEnd();

// Exercise 8

class Student {

    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    computeAverage() {
        if (this.grades.length == 0) {
            return 'No grades available.';
        }

        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        const average = sum / this.grades.length;
        return average;
    }
}

console.groupCollapsed('Exercise 8');

    const student1 = new Student('Alice');

    student1.addGrade(90);
    student1.addGrade(85);
    student1.addGrade(95);

    console.log(`Student: ${student1.name}`);
    console.log(`Grades: ${student1.grades.join(', ')}`);
    console.log(`Average: ${student1.computeAverage()}`);

console.groupEnd();
