
teamMembers = []
const generateTeam = team => {
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i])
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i])

        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i])
        }
    }
    return teamMembers.join("")
}
const generateManager = manager => {
    console.log(manager);
    let managerHTML = `
    
            <h4>${manager.name}</h4>
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
    teamMembers.push(managerHTML);
}

const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHTML =
        `<div class="card" style="width: 18rem;">
                <div class="card-header" id=${engineer.name}>
                
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id="temp2">ID:${engineer.id}</li>
                <li class="list-group-item" id="wind2">EMAIL:${engineer.email}<a href="mailto:${engineer.email}</a></li>
                <li class="list-group-item" id="humid2">GITHUB USER NAME:< href="https://github.com/${engineer.github}"><${engineer.github}</a></li>
                </ul>
            </div>`
teamMembers.push(engineerHTML);
}

const generateIntern = intern => {
    console.log(intern);
    let internHTML =
        `<div class="card" style="width: 18rem;">
                <div class="card-header" id=${intern.name}>
                
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" id="temp2">ID:${intern.id}</li>
                <li class="list-group-item" id="wind2">EMAIL:${intern.email}<a href="mailto:${intern.email}></a></li>
                <li class="list-group-item" id="humid2">SCHOOL:${intern.school}</li>
                </ul>
            </div>`
teamMembers.push(internHTML);

};



module.exports = team => {

    return `
                
                ${generateTeam(team)}`

}

const template = team => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profile</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&family=Merriweather:wght@700&display=swap"
        rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    
      </head>
      <body>
        <header class = "container">
          <div class = "flex box justify-center my-team">
            <h1> My Team </h1>
          </div>
        </header>
        <main class = "container">
        <h4>${generateTeam(team)}</h4>
        </main>
      </body>
    </html>
  `
  }
  
  module.exports = template;