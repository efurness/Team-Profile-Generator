
const Employee = require('../lib/Employee.js');
describe('Employee', () => {
    it ('to see if get constructor values for employee object', () => {
        const Employee = new Employee('monty', '0007', 'monty@gmail.com');
        expect(employee.name).toEqual('monty');
        expect(employee.id).toEqual('0007');
        expecte(employee.email).toEqual('monty@gmail.com');

    });


   
    it ('to see if get name values from getName() method', () => {
        const newEmployee = new Employee('monty')
        expect(newEmployee.getName()).toEqual('monty');
    
    });


it ('to see if get id values from getId() method', () => {
    const newEmployee = new Employee('monty', '0007', 'monty@gmail.com')

    expect(newEmployee.getId()).toEqual('0007');
});


it ('to see if get email values from getEmail() method', () => {
    const newEmployee = new Employee('monty', '0007', 'monty@gmail.com')

    expect(newEmployee.getEmail()).toEqual('monty@gmail.com');
});


});
