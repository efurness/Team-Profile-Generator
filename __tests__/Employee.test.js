
const Employee = require('../lib/Employee.js');
const employee = new Employee('monty', '007', 'monty@gmail.com');

test('to see if get constructor values for manager object'), () => {
    expect(employee.name).toBe('monty');
    expect(employee.name).toBe('0007');
    expect(employee.name).toBe('monty@gmail.com');
}
test('to see if get name values from getName method'), () => {
    expect(employee.getName).toBe('monty');
    
}
test('to see if get id value from getId method'), () => {
    expect(employee.getId).toBe('0007');
    
}
test('to see if get email values from getEmail method'), () => {
    expect(employee.getEmail).toBe('monty@gmail.com');
    
}
test('to see if get role values from getRole method'), () => {
    expect(employee.getRole).toBe('Employee');
    
}