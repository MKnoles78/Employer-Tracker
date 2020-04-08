const inquirer = require("inquirer")
const mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "RootPassword",
    database: "employee_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log ("connected")
    start()
});

function start() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "Exit"

        ]
    })
    .then(function(answer){
        switch (answer.action){
        case "View All Employees":
            viewEmployees();
            break;

        case "View All Employees by Department":
            viewDepartment();
            break;

        case "Add Employee":
            addEmployee();
            break;

        case "Remove Employee":
            removeEmployee();
            break;

        case "Update Employee Role":
            updateEmployee();
            break;

        case "Update Employee Manager":
            updateManager();
            break;

        case "Exit":
            connection.end();
            break;

        
        }
    })

}

//build database schema
// //function to view departments, roles, employees

function viewEmployees() {
    connection.query("SELECT * FROM employee", function(err,res){
        if (err) throw err;
        console.log(res);
        connection.end();
    });

};

// needs to join with employees to see departments 
function viewDepartment() {
    connection.query("SELECT * FROM departments", function(err,res){
        if (err) throw err;
        console.log(res);
        connection.end();
    });

};

function addEmployee() {
    inquirer
    .prompt([
        {
            name: "firstName",
            type: "input",
            message: "Enter First Name"
        },
        {
            name: "lastName",
            type: "input",
            message: "Enter Last Name"
        },  
    ])
    .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
          },
          function(err) {
            if (err) throw err;
            console.log("Successfully added employee!");
            start();
          }
        );
      });
};


// //function to update employee roles
// function update_emp(){

// }

// //function to update employee managers
// function update_mgr(){

// }
// //function to view employee by manager
// function view_by_mgr(){

// }
// //function to delete departments, roles, employees
// function delete_emp(){

// }
// //function to view combined salaries of employees
// function budget(){

// }
