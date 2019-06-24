console.log('JS');

$(document).ready(onReady);

let employeeList = [];
let maxMonthlyCosts = 20000;
let totalMonthlyCosts = 0;

function onReady () {
    console.log('in onReady function!');
    // add click events for:
    //      -- 1) render employee information when 'submit' button is clicked
    //      -- 2) render monthly cost when 'submit' button is clicked 
    //      -- 3) delete employee information when 'delete' button is clicked 
    //      -- 4) change monthly costs to red if monthly total is over the max costs 
    $('#addItemButton').on('click', renderEmployee);
    $('#addItemButton').on('click', displayMonthlyCosts);
    $('#output').on('click','.delete',deleteEmployeeInfo);
    $('#monthly-costs').on('click', redAlert);
    // $('#output').on('click','.delete',updateDeletedEmployees); **** disabled ****
}

// add function to render employee info 
//      -- declare a new object to take in the employee info entered into input fields 
//      -- push this employee info to the employeeList array 
//      -- clear input fields 
//      -- call addEmployee function 
//      -- call redAlert function
function renderEmployee() {
    console.log('in renderEmployee');
    event.preventDefault();
    let employeeInfo = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    employeeList.push(employeeInfo);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    addEmployee();
}

// add function to append new employee to DOM
//      -- target the output ID 
//      -- loop through array of employee objects 
//      -- append a <li> containing info from each object 
//      -- add a delete button at the end of the <li> 
function addEmployee () {
    console.log('in addEmployee');
    event.preventDefault();
    let el = $('#output'); 
    el.empty();
    for (let i=0; i<employeeList.length; i++) {
        el.append (
            `
            <li>${employeeList[i].firstName}
            ${employeeList[i].lastName}
            ${employeeList[i].idNumber}
            ${employeeList[i].jobTitle}
            ${employeeList[i].annualSalary}
            <button class="delete">Delete</button>
            </li>
            `
             );
        }
}

// add a function to display monthly costs on DOM 
//      -- target the monthly cost ID 
//      -- declare two new variables: 
//          1) totalAnnualSalary (each employee's annual salary added together)
//          2) monthlySalary (each annual salary / 12)
//      -- loop through array of employee objects 
//          -- change the totalAnnualSalary's value to itself (0) + any annual salary that's been entered 
//      -- change the monthly total value to the annual salary / 12 
//      -- append the monthly salary to the declared element
//      -- set the globally declared totalMonthlyCosts variable equal to monthlySalary 
//      -- call the redAlert function
function displayMonthlyCosts () {
    console.log('in displayMonthlyCosts');
    event.preventDefault();
    let el = $('#monthly-cost');
    el.empty();
    let totalAnnualSalary = 0; 
    let monthlySalary = 0;
    for (let i=0; i<employeeList.length; i++) {
        totalAnnualSalary += Number(employeeList[i].annualSalary);
        } 
        monthlySalary = Math.round(totalAnnualSalary / 12);
        el.append(`<p>${monthlySalary}</p>`);
        totalMonthlyCosts = monthlySalary;
        redAlert();
}

// add a function to delete the employee info of each input 
//      -- using 'this' grab the parent element of the delete function (which will be the employee info)
//      -- using 'this' again, remove the parent element's contents 
function deleteEmployeeInfo (event) {
    console.log('in deleteEmployeeInfo', $(this).parent().text());
    $(this).parent().remove();
}

// add a function to change the total appended monthly costs to red if costs reach over 20000, and orange if costs 
// equal 20000
//      -- add a conditional statement in which targets the monthly cost ID, and adds a class 'red' (from CSS)
//          if total monthly costs are greater than the maximum monthly costs 
//      -- if total monthly costs equal max monthly costs, add class 'orange' (from CSS)
function redAlert () {
    console.log('in redAlert');
    if (totalMonthlyCosts > maxMonthlyCosts)
    $('#monthly-cost').addClass('red');
    else if (totalMonthlyCosts === maxMonthlyCosts)
    $('#monthly-cost').addClass('orange');
    alertMessage();
}

// add a function to alert the user if their monthly costs have exceeded their max monthly costs
//      -- add a conditional statement
//      -- if this statement is true, send alert message to DOM that their costs have exceeded the max
function alertMessage () {
    console.log('in alertMessage');
    if (totalMonthlyCosts > maxMonthlyCosts)
    alert('Your Monthly Costs Have Exceeded the Maximum!');
}

// **** disabled function ****
// function updateDeletedEmployees () {
//     let el=('#output');
//     el.empty();
//     for (let i=0; i<employeeList.length; i++) {
//         el.remove ( 
//             `${employeeList[i]}`
//         )
//     }
// }












