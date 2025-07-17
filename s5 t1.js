// class Student {
//   constructor(fname, lname, gpa,uni) {
//     this.fname = fname;
//     this.lname = lname;
//     this.gpa = gpa;
//     this.uni=uni;
//   }

//   print() {
//     console.log(`My name is ${this.fname} ${this.lname}`);
//     console.log(`my university is the ${this.uni}`);
//     console.log(`My GPA is: ${this.gpa}`);

//   }
// }

// const std1 = new Student("Tawfik","Hegazy",3.74,"Egyptian chinese university")
// std1.print();

class User {
  #email;
  #id;

  constructor(name, email, id) {
    this.name = name;
    this.#email = email;
    this.#id = id;
  }

  setEmail(email) {
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  setId(id) {
    this.#id = id;
  }

  getId() {
    return this.#id;
  }

  method() {
    console.log("General user task");
  }
}

class Admin extends User {
  constructor(name, email, id) {
    super(name, email, id);
    this.users = [];
  }

  add(user) {
    this.users.push(user);
    console.log("New user is added.");
  }

  remove(userId) {
    this.users = this.users.filter(user => user.getId() !== userId);
    console.log("User is removed successfully.");
  }

  print() {
    this.users.forEach(user => {
      console.log(`User: ${user.name}`);
    });
  }

  method() {
    console.log("Admin is managing users.");
  }
}

class Doctor extends User {
  constructor(name, email, id, specialty) {
    super(name, email, id);
    this.specialty = specialty;
    this.patients = [];
  }

  diagnose(patientName, disease) {
    this.patients.push({ patientName, disease });
    console.log(`${this.name} diagnosed ${patientName} with ${disease}`);
  }

  list() {
    console.log(`Patients diagnosed by Dr. ${this.name}:`);
    this.patients.forEach(p => {
      console.log(`${p.patientName}: ${p.disease}`);
    });
  }

  method() {
    console.log(`The doctor ${this.name} is in work (specialty: ${this.specialty})`);
  }
}

class Patient extends User {
  constructor(name, email, id) {
    super(name, email, id);
    this.booking = ["Friday", "Sunday"];
    this.bookedAppointments = [];
  }

  view() {
    console.log("The booking days list:");
    console.log(`The booked days are: ${this.booking.join(", ")}`);
  }

  book(day, pname) {
    return new Promise((resolve, reject) => {
      if (this.booking.includes(day)) {
        reject(`The day ${day} is already booked.`);
      } else {
        this.booking.push(day);
        this.bookedAppointments.push({ pname, day });
        resolve(`The day ${day} is booked successfully for ${pname}`);
      }
    });
  }

  method() {
    console.log(`${this.name} can book appointments.`);
  }
}

const admin = new Admin("Mona", "mona@email.com", 1);
const doctor = new Doctor("Tawfik", "tawfik@email.com", 2, "Heart");
const patient = new Patient("Sara", "sara@email.com", 3);

admin.add(doctor);
admin.add(patient);

doctor.diagnose("Sara", "Cancer");

patient.book("Friday", "Sara")
  .then(msg => {
    console.log(msg);
    console.log("\n All users performing tasks ");
    const users = [admin, doctor, patient];
    users.forEach(user => user.method());
  })
  .catch(err => {
    console.log(err);
  });
