class Student {

    constructor(firstName, lastName, gradeLevel, GPA) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
        this.decimalGPA = parseFloat(GPA.toFixed(1));
    };

    printStudentDetails() {
        console.log(`${this.firstName} ${this.lastName} is in grade ${this.gradeLevel} and has a GPA of ${this.decimalGPA}.`);
    }
}

const student1 = new Student('Billie', 'Pierce', 12, 4.0);
student1.printStudentDetails();  /*
                                    Billie Pierce is in grade 12 and has a GPA of 4.0.
                                 */