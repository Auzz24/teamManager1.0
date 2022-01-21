const Employee = require ('../lib/Employee')

jest.mock('../lib/Employee.js');

test ('creates a Employee profile', () => {
const employee = new Employee(questions.nameIntput, '1')
    
expect(employee.name).toBe(questions.nameIntput);
expect(employee.id).toBe('1');
expect(employee.email).toBe(questions.emailInput);
})