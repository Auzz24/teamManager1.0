const Engineer = require('../lib/Engineer');

test ('test for Engineer github', () => {
const testGit = 'auzz24'
const engineer = new Engineer ("bob", "1", "w@gmail.com", testGit)

expect(engineer.github).toBe(testGit)
})

test ('test for getGithub method', () => {
    const testGit = "auzz24"
    const engineer = new Engineer ("bob", "1", "w@gmail.com",testGit)

    expect(engineer.getGithub()).toBe(testGit)
})

test ('test for getRole Method', () => {
    const engineer = new Engineer("bob", "1", "w@gmail.com", "auzz24")

    expect(engineer.getRole()).toBe('Engineer')
})
