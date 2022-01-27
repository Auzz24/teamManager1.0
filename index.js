const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employees = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the mangers name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the mangers ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter correct id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the mangers email adress? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your emial!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the mangers office number? (Required)',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter the correct office number!');
                return false;
            }
        }
    },
]

const questions2 = [
    {
        type: 'list',
        name: 'switchEmployee',
        message: 'Do you want to make a profite for another employee? (Required)',
        choices: ['intern', 'engineer', 'finish adding']
    }
]

const questions3 = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the interns name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter correct id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email adress? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your emial!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where did/does the intern attend school? (Required)',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a valid school!');
                return false;
            }
        }
    },
]

const questions4 = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the engineers name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engenieers ID? (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter correct id number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engiineers email adress? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your emial!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link for the engineer. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a proper GitHub link!');
                return false;
            }
        },
    },
]

const start = () => {
    return inquirer.prompt(questions);
};
const start2 = () => {
    return inquirer.prompt(questions2);
};
const start3 = () => {
    return inquirer.prompt(questions3);
};
const start4 = () => {
    return inquirer.prompt(questions4);
};



start().then((answers) => {
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.office)
    employees.push(newManager)

    start2().then((answer) => {
        if (answer.switchEmployee == 'intern') {
            start3();
        }
        else if (answer.switchEmployee == 'engineer') {
            start4();
        } else {
            // start generating HTML

        }
    });
})
