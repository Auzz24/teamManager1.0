const Intern = require('../lib/Intern');


test('test for intern school', () => {
    const testName = "SMU"
    const intern = new Intern("Joe", "1", "manager@gmail.com", testName)

    expect(intern.school).toBe(testName)

})
test('test for getSchool()', () => {
    const testName = "SMU"
    const intern = new Intern("Joe", "1", "manager@gmail.com", testName)

    expect(intern.getSchool()).toBe(testName)

})

test('test for getRole Method', () => {
    const intern = new Intern("bob", "1", 'austin@gmail.com', "SMU")

    expect(intern.getRole()).toBe('Intern')
})