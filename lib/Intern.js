// the next js files follow simalarly to the child classes inheriting from parent class
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
    // calls parents instructor
        super(name, id, email)

        this.school = school;
    }
   
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}
module.exports = Intern
