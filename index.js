const inquirer = require("inquirer")
const mysql = require("mysql")

var connection = mysqul.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "RootPassword",
    database: "employeeDB"

});

connection.connect(function(err) {
    if (err) throw err;
    start ()
});

function start() {

}

//build database schema
//function to add departments, roles, employees
//function to view departments, roles, employees
//function to update employee roles

//function to update employee managers
//function to view employee by manager
//function to delete departments, roles, employees
//function to view combined salaries of employees
