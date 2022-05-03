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
            
        },


            {type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',
            
        },


            {type: 'input',
            name: 'email',
            message: 'Enter your email? (Required)',
            

        },

            {type: 'input',  
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
        fs.writeFileSync(path.join(path.resolve(__dirname,"dist"),"team.html"), generateSite(teamMembers),'utf-8');

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
                
            },

               { type: 'input',
                name: 'id',
                message: 'What is your employee id number? (Required)',
                
            },

                {type: 'input',
                name: 'email',
                message: 'Enter your email? (Required)',
                
            },
                {type: 'input',
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
    return inquirer.prompt([
        
            {type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            
        },

            {type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',
            
        },

            {type: 'input',         
            name: 'email',
            message: 'Enter your email? (Required)',
           
        },

           { type: 'input',
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
            



