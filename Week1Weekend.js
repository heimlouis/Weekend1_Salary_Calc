// ====================================================================
// # Weekend Challenge 1 - Salary Calculator:
// Create an application that records employee salaries and adds
// salaries up to report monthly costs.
// ====================================================================
//
// ## Topics Covered:
// - JavaScript
// - jQuery - Selectors, append, and event handling
// ====================================================================
//
// ## Assignment:
// The application should have an input form that collects
// Employee Data
//  - first name
//  - last name
//  - ID number
//  - job title
//  - annual salary
//
// A 'Submit' button should collect the form information, store the
// information to calculate monthly costs, append information to the
// DOM and clear the input fields. Using the stored information,
// calculate monthly costs and append this to the to DOM.
// ====================================================================

//needed:
//input textboxes (first name, last name, ID number, job title & annual salary)
//submit button (this will need an ID for on click)
//on click will need to collect data, store info, append info on the DOM,
//clear input textboxes, calculate monthly cost & append monthly cost to DOM
console.log('js');
//employee data - object

//employees - array
var employees = [];

$(document).ready( function(){
  console.log('jq is ready');
  $('#expenseCalcBtn').on( 'click', function(){
    console.log('in expenseCalcBtn on click');
    // get user input
    //create new employeeData object
    var employeeDataObject = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      idNumber: $('#idNumber').val(),
      jobTitle: $('#jobTitle').val(),
      annualSalary: $('#annualSalary').val()
    };//end employeeData object
    console.log('adding:',employeeDataObject);
    //push to object array
    employees.push(employeeDataObject);
    //display on the DOM
    displayEmployees();
  });
});
//start displayEmployees function
function displayEmployees(){
  console.log('in displayEmployees');
  //add to the DOM in the ul element in the array
  var employeeOutput = $('#employeeDataID');
  //need to empty the ul
  employeeOutput.empty();
  //loop through the employees array
  for (var i = 0; i < employees.length; i++) {
    //these need to be appended to the ul element
    //local variable to store the append data
    var employeeStringData = '<li>';
    employeeStringData += employees[i].firstName+' ';
    employeeStringData += employees[i].lastName+' ';
    employeeStringData += employees[i].idNumber+' ';
    employeeStringData += employees[i].jobTitle+' ';
    employeeStringData += employees[i].annualSalary+' ';
    employeeStringData += '</li>';
    employeeOutput.append(employeeStringData);
  }
}
