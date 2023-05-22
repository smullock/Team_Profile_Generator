// generates html page
const generateMarkdown = require('./src/generateHTML');
//adds inquirer package
const inquirer = require('inquirer');
const fs = require('fs');

//add subclasses
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

//create empty array to hold team members
team = [];




function addManager(){
    inquirer
    .prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Manager'
    },
    {
        type: 'input',
        name: 'id',
        message: ' Enter the managers employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: ' Enter the managers email address'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: ' Enter the office number'
    },
  
])
.then(managerInput => {
    const manager = new Manager(managerInput.name, managerInput.id, managerInput.email,managerInput.officeNumber)
    team.push(manager);
    console.log(team);
    addEmployee();
    
});



function addEmployee(){
    inquirer
    .prompt ([
      
        {
            type: 'list',
            name: 'role',
            message: 'Enter the type of Employee Role',
            choices: ['Engineer', 'Intern']
        },

        {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Employee',
    },
    {
        type: 'input',
        name: 'id',
        message: ' Enter the employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: ' Enter the employees email address',
    },

    {
        type: 'input',
        name: 'github',
        message: ' Enter the enginners github account',
        when: (input) => input.role === "Engineer",
    },

    {
            type: 'input',
            name: 'school',
            message: ' Enter the interns school',
            when: (input) => input.role === "Intern",
    },

    {
    type: 'confirm',
    name: 'next',
    message: 'Do you want to add another employee',
    default: false
    },     
  
])
.then(employeeData => {
    // data for employee types 

    let { name, id, email, role, github, school, next } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    team.push(employee); 
    
    if (next) {
        return addEmployee(team); 
    } else {
        return generateHTML(team);
        
    }
    
    });     
    
}

}

// generate HTML page 
function generateHTML(){


const writeFile = generateMarkdown(team) 

    fs.writeFile('./dist/index.html', writeFile, err => {
        err ? console.log(err) : console.log('Successfully created Team')
    })
}


addManager();





    

