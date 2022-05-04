const Employee = require('../lib/Employee');

describe('Manager', () => {
    it('to see if get constructor values for manager object', () => {
        const manager = new Employee('marvin', '0008', 'marvin@gmail.com');
        expect(manager.name).toEqual('marvin');
        expect(manager.id).toEqual('0008');
        expect(manager.email).toEqual('marvin@gmail.com');
    });



    it('to see if get name values from getName() method', () => {
        const newmanager = new Employee('marvin')
        expect(newmanager.getName()).toEqual('marvin');

    });


    it('to see if get id values from getId() method', () => {
        const newmanager = new Employee('marvin', '0008', 'marvin@gmail.com')

        expect(newmanager.getId()).toEqual('0008');
    });


    it('to see if get email values from getEmail() method', () => {
        const newmanager = new Employee('marvin', '0008', 'marvin@gmail.com')

        expect(newmanager.getEmail()).toEqual('marvin@gmail.com');

    });


});
