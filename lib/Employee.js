//DO i put const fs? inquirer? 


//should this be getName() ? 
const questions = [

    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },

    /// should this be getEmail()??? 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email adress? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email!');
                return false;
            }
        }
    },
];