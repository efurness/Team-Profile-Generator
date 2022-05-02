const Employee = require("../lib/Employee");
teamMembers = []

const generateManager = manager => {
    console.log(manager);
    let managerHTML = `
    
            <h4>${generateTeam(team)}</h4>
            <div class="row">
              <div class="card" style="width: 18rem;">
                <div class="card-header" id=${manager.name}>
                  
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="temp2">ID:${manager.id}</li>
                  <li class="list-group-item" id="wind2">EMAIL:${manager.email}<a href="mailto:${manager.email}</a></li>
                  <li class="list-group-item" id="humid2">OFFICE NUMBER:${manager.officeNumber}</li>
                </ul>
              </div>`
}
const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHTML = 
                `<div class="card" style="width: 18rem;">
                <div class="card-header" id=${manager.name}>
                
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id="temp2">ID:${engineer.id}</li>
                <li class="list-group-item" id="wind2">EMAIL:${engineer.email}<a href="mailto:${manager.email}</a></li>
                <li class="list-group-item" id="humid2">GITHUB USER NAME:< href="https://github.com/${engineer.githubUsername}">${engineer.github}</a></li>
                </ul>
            </div>`
}           
const generateIntern = intern => {
    console.log(intern);
    let internHTML = 
                `<div class="card" style="width: 18rem;">
                <div class="card-header" id=${intern.name}>
                
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id="temp2">ID:${intern.id}</li>
                <li class="list-group-item" id="wind2">EMAIL:${intern.email}<a href="mailto:${intern.email}</a></li>
                <li class="list-group-item" id="humid2">SCHOOL:${intern.school}</li>
                </ul>
            </div>`
            return html.join('');
    };     
        for (let i = 0; i < teamMembers.length; i++) {
            if (team[i].getRole() === "Manager") {
                generateManager(team)[i]
            }
            if (team[i].getRole() === "Engineer") {
                generateEngineer(team)[i]

            }
            if (team[i].getRole() === "Intern") {
                generateIntern(team)[i]
            }
        }
    
        
       

            module.exports = team => {
                return

            }