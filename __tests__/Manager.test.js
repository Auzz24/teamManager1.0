const Manager = require('../lib/Manager');


test ('test for office number', () => {
const testName = "02"
const manager = new Manager("Joe","1","manager@gmail.com", testName)
    
expect(manager.officeNumber).toBe(testName)
})

test('test for getRole Method', () => {
    const manager  = new Manager("bob", "02", 'austin@gmail.com', "1")

    expect(manager.getRole()).toBe('Manager')
})