const Engineer = require("../lib/engineer");

function generateMarkdown(team) {
    return `<!doctype html>
      <html lang="en">
          <head>
              <!-- Required meta tags -->
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <!-- Bootstrap CSS -->
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
              <link rel="stylesheet" href="style.css">
              <title>Team Profile Generator</title>
          </head>
          <body>
              <header class="header">
                  <div class="row">
                      <div class="col-lg-20 header_text text-center">
                          <h1>My Team</h1>
                      </div>
                  </div>
              </header>
  
              <section class="content">
              ${
                  team.map(employee => {
                      return `<div class="card" style="width: 18rem;">
                      <div class="card-header bs-blue text-center">
                          <h5 class="card-title text-black">${employee.getName()}</h5>
                          <h6 class="card-subtitle mb-2 text-white">${employee.getRole()}</h6>
                      </div>
                      
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                         <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                         ${switchType(employee)}
                      </ul>
                    </div>`
                  })
              }
          </section>
  
          </body>
      </html>`}


      function switchType (employee) {
        if(employee.getRole() == "Manager") {
            return `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`
        }
    
        if(employee.getRole() == "Engineer") {
            return `<li class="list-group-item">Github: <a href="https://github.com/${employee.github}"> ${employee.github}</a></li>`
        }
    
        if(employee.getRole() == "Intern") {
            return `<li class="list-group-item">School: ${employee.school}</li>`
        }
    
    }
    
      
      module.exports = generateMarkdown;