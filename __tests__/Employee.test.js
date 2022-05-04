
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

});
