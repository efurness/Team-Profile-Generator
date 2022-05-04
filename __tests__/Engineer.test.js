const Employee = require('../lib/Employee.js');

describe('Engineer', () => {
    it('to see if get constructor values for engineer object', () => {
        const engineer = new Employee('lucas', '0005', 'lucas@gmail.com');
        expect(engineer.name).toEqual('lucas');
        expect(engineer.id).toEqual('0005');
        expect(engineer.email).toEqual('lucas@gmail.com');
    });



    it('to see if get name values from getName() method', () => {
        const newEngineer = new Employee('lucas')
        expect(newEngineer.getName()).toEqual('lucas');

    });


    it('to see if get id values from getId() method', () => {
        const newEngineer = new Employee('lucas', '0005', 'lucas@gmail.com')

        expect(newEngineer.getId()).toEqual('0005');
    });


    it('to see if get email values from getEmail() method', () => {
        const newEngineer = new Employee('lucas', '0005', 'lucas@gmail.com')

        expect(newEngineer.getEmail()).toEqual('lucas@gmail.com');

    });

});

