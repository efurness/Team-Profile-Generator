const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    it ('to see if get constructor values for intern object', () => {
        const intern = new Employee('sally', '0006', 'sally@gmail.com', 'CU');
        expect(intern.name).toEqual('sally');
        expect(intern.id).toEqual('0006');
        expect(intern.email).toEqual('sally@gmail.com');
        expect(intern.school).toEqual('CU');
    });


    it ('to see if get name values from getName() method', () => {
        const newIntern = new Employee('sally')
        expect(newIntern.getName()).toEqual('sally');
    
    });


    it ('to see if get id values from getId() method', () => {
    const newIntern = new Employee('sally', '0006', 'sally@gmail.com', 'CU')

    expect(newIntern.getId()).toEqual('0006');
});


    it ('to see if get email values from getEmail() method', () => {
    const newIntern = new Employee('sally', '0006', 'sally@gmail.com', 'CU')

    expect(newIntern.getEmail()).toEqual('sally@gmail.com');

});

    it ('to see if get school values from getschool() method', () => {
        const newIntern = new Employee('sally', '0006', 'sally@gmail.com', 'CU')
    
        expect(newIntern.getSchool()).toBe('CU');
    });
});
