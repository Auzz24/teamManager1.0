class Engineer {

    constructor(github){
        this.gitHub = github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer