const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/template");
//cards

let teamData = [];
const addManager = () => {
    return (
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the managers name?"
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the managers id?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the managers email?"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the managers office number?"
                },
            ])
            .then((managerData) => {
                const { name, id, email, officeNumber } = managerData;
                const manager = new Manager(name, id, email, officeNumber);
                teamData.push(manager);
                // createTeam();
            })
    );
};

const addEmployee = () => {
    console.log(`add new employee`)
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: ["Engineer", "Intern"],
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's GitHub username?",
                when: function (answers) {
                    return answers.role === "Engineer";
                },
            },
            {
                type: "input",
                name: "school",
                message: "What is the Intern's school name?",
                when: function (answers) {
                    return answers.role === "Intern";
                },
            },
            {
                type: "confirm",
                name: "newEmployee",
                message: "If you would like to add another employee please confirm",
                default: false,
            },
        ])
        .then((employeeData) => {
            var { role, name, id, email, github, school, newEmployee } = employeeData;
            if (role === "Engineer") {
                const engineer = new Engineer(name, id, email, github);
                teamData.push(engineer)
            } else if (role === "Intern") {
                const intern = new Intern(name, id, email, school);
                teamData.push(intern);
            }
            if (newEmployee) {
                return addEmployee(teamData);
            } else {
                return teamData;
            }

        });
};

addManager() 
    .then(addEmployee)
    .then((teamData) => {
        const teamPage = generateHtml(teamData);
        fs.writeFileSync("./dist/index.html", teamPage, (err) => {
            if (err) throw new Error(err);

            console.log("Team profile created!!");
        });

    });
