class Member {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.#email = email;
        this.#id = id;
    }

    performTask() {
        console.log("Initiative perform for override");
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        this.#email = email;
    }

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }
}

class Professor extends Member {
    constructor(name, email, id, department) {
        super(name, email, id);
        this.department = department;
        this.courses = [];
    }

    addCourses(course) {
        this.courses.push(course);
    }

    viewCourses() {
        console.log("The available courses:");
        console.log(`The added courses are: ${this.courses.join(", ")}`);
    }

    performTask() {
        console.log(`The professor ${this.name} is teaching ${this.courses.join(", ")}`);
    }
}

class student extends Member {
    constructor(name, email, id, major) {
        super(name, email, id);
        this.major = major;
        this.enrolledCourses = [];
    }

    enrollCourse(NewCourse) {
        this.enrolledCourses.push(NewCourse);
        console.log(`The course ${NewCourse} is enrolled now`);
    }

    viewEnrolledCourses() {
        console.log("\nThe enrolled courses are:\n");
        console.log(this.enrolledCourses.join(" , "));
    }

    performTask() {
        console.log(`The student ${this.name} enrolled the following courses ${this.enrolledCourses.join(" , ")}`);
    }
}

class Admin extends Member {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(NewMember) {
        this.members.push(NewMember);
        console.log(`A new member ${NewMember.name} is added successfully`);
    }

    removeMember(memberID) {
        this.members = this.members.filter(member => member.getId() !== memberID);
        console.log(`The Admin ${this.name} removed the member ${memberID}`);
    }

    viewMembers() {
        console.log(`The list of the members organized by the admin ${this.name} are: ${this.members.map(m => m.name).join(" , ")}`);
    }

    performTask() {
        console.log(`The admin ${this.name} is responsible for adding and removing members`);
    }
}

const professor_1 = new Professor("Hany", "hany@gmail.com", 3, "Physics");
const student_1 = new student("Tawfik", "tawfik@gmail.com", 139, "Computer and Information System");
const student_2 = new student("Samir", "samo@gmail.com", 20, "Art");
const admin = new Admin("Menna", "menna@gmail.com", 1);

student_1.viewEnrolledCourses();
admin.viewMembers();
professor_1.viewCourses();

admin.addMember(student_1);
admin.addMember(student_2);
admin.addMember(professor_1);

admin.removeMember(20);

professor_1.addCourses("English");
professor_1.addCourses("Math");

student_1.enrollCourse("Math");
student_1.enrollCourse("English");

student_1.viewEnrolledCourses();
admin.viewMembers();
professor_1.viewCourses();

console.log("\n**** Perform Task for Each Member ****");
admin.performTask();
professor_1.performTask();
student_1.performTask();
