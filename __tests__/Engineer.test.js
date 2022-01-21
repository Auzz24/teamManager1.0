const Employee = require ('../lib/Employee')
const Engineer = require('../lib/Engineer');

test ('test for Engineer github', () => {
const testGit = 'auzz24'
const engineer = new Engineer (testGit)

expect(engineer.github).toBe(testGit)
})

test ('test for getGithub method', () => {
    const testGit = "auzz24"
    const engineer = new Engineer (testGit)

    expect(engineer.getGithub()).toBe(testGit)
})

test ('test for getRole Method', () => {
    const engineer = new Engineer("auzz24")

    expect(engineer.getRole()).toBe('Engineer')
})
test ('create an emplyee object', () => {
    const engineer = new Engineer("auzz24")

    expect(typeof(engineer)).toBe('object')
})