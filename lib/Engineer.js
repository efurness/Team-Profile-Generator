// child classes of manager, enginneer and intern extend or inherit parent class and required Employee.js file in library
// Also a contructor function to acquire the class of Employee
// Super function gives access to methods and properties  of parent class and returns an object that represents parent class
// similar get methods returning roles of Engineer, Intern and Manager
// the module are exported to use in the app

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calls parents instructor
        super(name, id, email)
        this.github = github;
    }

    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer
