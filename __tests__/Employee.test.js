// All testt tested each get methods for name, id and email.  Tests initially failed so I had to go one by one testing each part of the one test and followed suit with the rest of the tests
// The describe function refers to the Employee suite of tests of constructor values, using to expect each value followed by seeing if values for the get methods were correct
// All the tests required the parent class Employee but similar tests were conducted for each name, id, and email.  All tests passed.  Tests for engineer, intern, manager were identical.  

const Employee = require('../lib/Employee.js');
describe('Employee', () => {
    it('to see if get constructor values for employee object', () => {
        const newEmployee = new Employee('monty', '0007', 'monty@gmail.com');
        expect(newEmployee.name).toEqual('monty');
        expect(newEmployee.id).toEqual('0007');
        expect(newEmployee.email).toEqual('monty@gmail.com');

    });



    it('to see if get name values from getName() method', () => {
        const newEmployee = new Employee('monty')
        expect(newEmployee.getName()).toEqual('monty');

    });


    it('to see if get id values from getId() method', () => {
        const newEmployee = new Employee('monty', '0007', 'monty@gmail.com')

        expect(newEmployee.getId()).toEqual('0007');
    });

    it('to see if get email values from getEmail() method', () => {
        const newEmployee = new Employee('monty', '0007', 'monty@gmail.com')

        expect(newEmployee.getEmail()).toEqual('monty@gmail.com');

    });
});
