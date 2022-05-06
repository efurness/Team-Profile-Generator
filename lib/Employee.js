// Employee modal is parent class to build classes of intern, manager and engineer
// Contructor function for values name, id, and email
// module exports are instructions to tell Node js which bits of codes to export so other files are allowed to access the code

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}
module.exports = Employee
