const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // calls parents instructor

        super(name, id, email);

        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
    }
}
module.exports = Manager
