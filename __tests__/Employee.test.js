const Employee = require ('../lib/Employee')

// jest.mock('../lib/Employee.js');

test ('test for Employee name', () => {
    const testName = "bob"
    const employee = new Employee(testName,"1", "austin@gmail.com")

    expect(employee.name).toBe(testName)
})
test ('creates a Employee id', () => {
    const testId = "1"
    const employee = new Employee("bob",testId, "austin@gmail.com")

    expect(employee.id).toBe(testId)
})
test ('test for Employee email', () => {
    const testEmail = "austin@gmail.com"
    const employee = new Employee("bob","1", testEmail)

    expect(employee.email).toBe(testEmail)
})
test ('test for getName method', () => {
    const testName = "bob"
    const employee = new Employee(testName,"1", "austin@gmail.com")

    expect(employee.getName()).toBe(testName)
})
test ('test for getId method', () => {
    const testId = "1"
    const employee = new Employee("bob",testId, "austin@gmail.com")

    expect(employee.getId()).toBe(testId)
})
test ('test for getEmail method', () => {
    const testEmail = "austin@gmail.com"
    const employee = new Employee("bob","1", testEmail)

    expect(employee.getEmail()).toBe(testEmail)
})
test ('test for getRole Method', () => {
    const employee = new Employee("bob","1", 'austin@gmail.com')

    expect(employee.getRole()).toBe('Employee')
})
test ('create an emplyee object', () => {
    const employee = new Employee("bob","1", 'austin@gmail.com')

    expect(typeof(employee)).toBe('object')
})
