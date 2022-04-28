
const Manager = require('../lib/Manager.js');
const Manager = new Manager('adam', '0008', 'adam@gmail.com');

test('to see if get constructor values for manager object'), () => {
    expect(manager.name).toBe('adam');
    expect(manager.id).toBe('0008');
    expect(manager.email).toBe('adam@gmail.com');
}
test('to see if get name values from getName method'), () => {
    expect(manager.getName).toBe('adam');
    
}
test('to see if get id value from getId method'), () => {
    expect(manager.getId).toBe('0008');
    
}
test('to see if get email values from getEmail method'), () => {
    expect(manager.getEmail).toBe('adam@gmail.com');
    

test('to see if get role values from getRole method'), () => {
        expect(manager.getOfficeNumber).toBe('10');
        
}
}
test('to see if get role values from getRole method'), () => {
    expect(manager.getRole).toBe('Manager');
    
}