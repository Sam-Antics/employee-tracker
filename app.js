const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

const initApp = () => {
  console.log('Welcome to the SamAntic Security Employee Tracker');
  return inquirer.prompt([
    {
      type: 'list',
      name: 'mainMenu',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Quit']
    }
  ])
  .then((answer) => {
    const selection = answer

    if (selection === 'View All Employees') {
      employeeSelector();
    }
    return;
    }
  );
};

function employeeSelector() {
  let sql = `SELECT * FROM employee`;

  db.query(sql, (error, response) => {
    if (error) throw error;
    console.table(response);
    initApp();
  });
}


initApp()