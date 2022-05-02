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
        
            { type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            // validate: nameInput => {
            //     if (nameInput) {
            //         return true;

            //     } else {
            //         console.log('please enter your name');
            //         return false;
            //     }

            // },
        },


            {type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',
            // validate: id => {
            //     if (id) {
            //         return true;

            //     } else {
            //         console.log('please enter your id number');
            //         return false;
            //     }
            // },
        },


            {type: 'input',
            name: 'email',
            message: 'Enter your email? (Required)',
            // validate: email => {
            //     if (email) {
            //         return true;

            //     } else {
            //         console.log('please enter your email');
            //         return false;
            //     }
            // },
        },

            {type: 'input',  
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            // validate: officeNumber => {
            //     if (officeNumber) {
            //         return true;

            //     } else {
            //         console.log('please enter your office number?');
            //         return false;
            //     }
            // }
        },
    ])
    .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.employeeId, answers.employeeEmail, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu(); 
    })
}
    const buildTeam = () => {
        writeToFile("./output/team.html", generateSite(teamMembers));

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
                switch(userChoice.menu) {
                case "add an engineer":
                    promptManager();
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
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                // validate: nameInput => {
                //     if (nameInput) {
                //         return true;

                //     } else {
                //         console.log('please enter your name');
                //         return false;
                //     }

                // },


                type: 'input',
                name: 'id',
                message: 'What is your employee id number? (Required)',
                // validate: id => {
                //     if (id) {
                //         return true;

                //     } else {
                //         console.log('please enter your employee id number');
                //         return false;
                //     }
                // },


                type: 'input',
                name: 'email',
                message: 'Enter your email? (Required)',
                // validate: email => {
                //     if (email) {
                //         return true;

                //     } else {
                //         console.log('please enter your email');
                //         return false;
                //     }
                // },
            
                type: 'input',
                name: 'github',
                message: 'What is your github username? (Required)',
                // validate:  => {
                //     if (github) {
                //         return true;

                //     } else {
                //         console.log('please enter your github username?');
                //         return false;
                //     }
                },
            
            ]).then(answers => {
                console.log(answers)
                const engineer = new Engineer(answers.name, answers.employeeId, answers.employeeEmail, answers.github);
                teamMembers.push(engineer);
                promptMenu();
            })
    };    

 const promptIntern = () => {
     console.log(`ADD A NEW INTERN`);
    return inquirer.prompt([
        
            {type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            // validate: nameInput => {
            //     if (nameInput) {
            //         return true;

            //     } else {
            //         console.log('please enter your name');
            //         return false;
            //     }

            // },

    },
            {type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',
            // validate: id => {
            //     if (id) {
            //         return true;

            //     } else {
            //         console.log('please enter your id number');
            //         return false;
            //     }
            // },
            },

            {type: 'input',         
            name: 'email',
            message: 'Enter your email? (Required)',
            // validate: email => {
            //     if (email) {
            //         return true;

            //     } else {
            //         console.log('please enter your email');
            //         return false;
            //     }
            // },
        },
           { type: 'input',
            name: 'school',
            message: 'What is your school? (Required)',
        //     validate: school => {
        //         if (school) {
        //             return true;

        //         } else {
        //             console.log('please enter your school?');
        //             return false;
        //         }
        //     }
        // },
        },
    ]).then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.employeeId, answers.employeeEmail, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};  
const prompt = () => {
    console.log(`FINISH BUILDING TEAM`);

// create directory if no output
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
}
        fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");

}

promptManager();
            
        
function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {   
        console.log("Making Team Profile Generator");
        writeToFile("./output/team.html", generateSite(inquirerResponse));
    })
    .catch((err) => {
        console.log(err);
    })
}


// init();


