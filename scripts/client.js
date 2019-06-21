console.log('JS');

$(document).ready(onReady);

let employeeList = [];

function onReady () {
    console.log('in onReady function!');
    $('#addItemButton').on('click',renderEmployee);
}

// function eventHandler () {
//     renderEmployee();
// }

function renderEmployee() {
    console.log('in addEmployeeHandler');
    event.preventDefault();
    let employeeInfo = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    employeeList.push(employeeInfo);
    addEmployeeFirstName();
    addEmployeeLastName();
    addEmployeeID();
    addEmployeeJobTitle();
    addEmployeeSalary();
}

function addEmployeeFirstName () {
    console.log('in addEmployee function');
   let el = $('#first-name-out');
   el.empty();
   for (let i=0; i<employeeList.length; i++) {
       el.append(`<p>${employeeList[i].firstName}</p>`)
   }
   $('#firstNameIn').val('');
}

function addEmployeeLastName () {
    console.log('in addEmployee function');
   let el = $('#last-name-out');
   el.empty();
   for (let i=0; i<employeeList.length; i++) {
       el.append(`<p>${employeeList[i].lastName}</p>`)
   }
   $('#lastNameIn').val('');
}

function addEmployeeID () {
    console.log('in addEmployee function');
   let el = $('#ID-number-out');
   el.empty();
   for (let i=0; i<employeeList.length; i++) {
       el.append(`<p>${employeeList[i].idNumber}</p>`)
   }
   $('#IdNumberIn').val('');
}

function addEmployeeJobTitle () {
    console.log('in addEmployee function');
   let el = $('#job-title-out');
   el.empty();
   for (let i=0; i<employeeList.length; i++) {
       el.append(`<p>${employeeList[i].jobTitle}</p>`)
   }
   $('#jobTitleIn').val('');
}

function addEmployeeSalary () {
    console.log('in addEmployee function');
   let el = $('#salary-output');
   el.empty();
   for (let i=0; i<employeeList.length; i++) {
       el.append(`<p>${employeeList[i].annualSalary}</p>`)
   }
   $('#jobTitleIn').val('');
}










