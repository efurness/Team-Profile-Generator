const Engineer = require('../lib/Engineer.js');
const intern = new Employee('Lucas', '0005', 'lucas@gmail.com');

test('to see if get constructor values for Lucas object'), () => {
    expect(Engineer.name).toBe('lucas');
    expect(Engineer.name).toBe('0005');
    expect(Engineer.name).toBe('lucas@gmail.com');
}
test('to see if get name values from getName method'), () => {
    expect(Engineer.getName).toBe('lucas');
    
}
test('to see if get id value from getId method'), () => {
    expect(Engineer.getId).toBe('0005');
    
}
test('to see if get email values from getEmail method'), () => {
    expect(Engineer.getEmail).toBe('lucas@gmail.com');
    

test('to see if get role values from getGithub method'), () => {
        expect(Engineer.github).toBe('lucasE');
        
    }
}
test('to see if get role values from getRole method'), () => {
    expect(intern.getRole).toBe('Intern');
    
}