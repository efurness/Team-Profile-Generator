// for the app.js the libraries of manager, engineer and intern were required as well as inquirer, the source file generate-site, path, fs, and OUTPUT directory and 
// PATH was used to join and resolve the input questions with the output.  teamMembers was an empty array.  Inquirer prompts were used for each manager, engineer and intern
// The type, name and message prompts were layed out in a structure with manager first prompted and adding engineers and interns to the team using a build team function
// Additional questions were for interns' school, engineers' github username and Managers' office number.  The .then fed the answers for each cohert and pushed into the generate-site file
// A prompt menu came up each time in Node once the manager role was entered to add engineers and interns to the team using a switch function with a case for each that was prompted to add to the team
// After input, the prompt menu asks to finish building team or add more team members.
// An output directory is created if an output path doesn't exist using fs write file sync to add a new file with output from prompts for team members to generate site

const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateSite = require('./src/generate-site.js');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "./output/team.html");
const teamMembers = [];

const promptManager = () => {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',

        },


        {
            type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',

        },


        {
            type: 'input',
            name: 'email',
            message: 'Enter your email? (Required)',


        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',

        },
    ])
        .then((answers) => {
            console.log(answers)
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(manager);
            promptMenu();
        })
}
const buildTeam = () => {
    console.log(teamMembers)
    fs.writeFileSync(path.join(path.resolve(__dirname, "dist"), "team.html"), generateSite(teamMembers), 'utf-8');

}

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'please select option',
            choices: ['add an engineer', 'add an intern', 'finish building team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;

                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
         ADD A NEW ENGINEER
         `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',

        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id number? (Required)',

        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email? (Required)',

        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? (Required)',

        },

    ])
        .then(answers => {
            console.log(answers)
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(engineer);
            promptMenu();
        })
};

const promptIntern = () => {
    console.log(`ADD A NEW INTERN`);
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',

        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',

        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email? (Required)',

        },

        {
            type: 'input',
            name: 'school',
            message: 'What is your school? (Required)',

        },
    ])
        .then(answers => {
            console.log(answers)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(intern);
            promptMenu();
        })
};


promptManager();





