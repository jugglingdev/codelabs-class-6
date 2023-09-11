class Student {

    constructor(firstName, lastName, gradeLevel, GPA, activeStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
        this.decimalGPA = parseFloat(GPA.toFixed(1));
        this.activeStatus = activeStatus;
    };

    printStudentDetails() {
        console.log(`${this.firstName} ${this.lastName} is in grade ${this.gradeLevel} and has a GPA of ${this.decimalGPA}.`);
    };

    regularMethod() {
        console.log(`${this.firstName} is awesome!`);
    };

    arrowMethod = () => {
        if (this.activeStatus) {
            console.log(`${this.firstName} is still in school.`);
        }
    };
}

const student1 = new Student('Billie', 'Pierce', 12, 4.0, true);
student1.printStudentDetails();  /*
                                    Billie Pierce is in grade 12 and has a GPA of 4.0.
                                 */

student1.regularMethod();  // Billie is awesome!
student1.arrowMethod();  // Billie is still in school.
