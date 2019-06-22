console.log('JS');

$(document).ready(onReady);

let employeeList = [];
let allSalaries = 0;

function onReady () {
    console.log('in onReady function!');
    $('#addItemButton').on('click', renderEmployee);
    // $('#addItemButton').on('click',addAllSalaries);
    // $('#addItemButton').on('click', displayMonthlyTotal);
}
// function renderSalary () {

// }
function renderEmployee() {
    console.log('in addEmployeeHandler');
    //event.preventDefault();
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

// function displayMonthlyTotal () {
//     let monthlyTotalContents = {
//         totalSalary: $('#annualSalaryIn').val()
//     }
//     allSalaries.push(monthlyTotalContents);
//     monthlyTotal();
// }
function addEmployee () {
    event.preventDefault();
    let el = $('#output');
    let monthlySalary = 0;
    let totalAnnualSalary = 0; 
    el.empty();
    for (let i=0; i<employeeList.length; i++) {
        el.append (
            `<tr>
            <th>${employeeList[i].firstName}</th>
            <th>${employeeList[i].lastName}</th>
            <th>${employeeList[i].idNumber}</th>
            <th>${employeeList[i].jobTitle}</th>
            <th>${employeeList[i].annualSalary}</th>
            </tr>`
             );
             totalAnnualSalary += Number(employeeList[i].annualSalary);
    }
    monthlySalary = Math.round(totalAnnualSalary / 12);
    $('#monthly-cost').append(`<p>${monthlySalary}</p>`)
}

// function addEmployeeFirstName () {
//     console.log('in addEmployee function');
//    let el = $('#first-name-out');
//    el.empty();
//    for (let i=0; i<employeeList.length; i++) {
//        el.append(`<p>${employeeList[i].firstName}</p>`)
//    }
//    $('#firstNameIn').val('');
// }

// function addEmployeeLastName () {
//     console.log('in addEmployee function');
//    let el = $('#last-name-out');
//    el.empty();
//    for (let i=0; i<employeeList.length; i++) {
//        el.append(`<p>${employeeList[i].lastName}</p>`)
//    }
//    $('#lastNameIn').val('');
// }

// function addEmployeeID () {
//     console.log('in addEmployee function');
//    let el = $('#ID-number-out');
//    el.empty();
//    for (let i=0; i<employeeList.length; i++) {
//        el.append(`<p>${employeeList[i].idNumber}</p>`)
//    }
//    $('#IdNumberIn').val('');
// }

// function addEmployeeJobTitle () {
//     console.log('in addEmployee function');
//    let el = $('#job-title-out');
//    el.empty();
//    for (let i=0; i<employeeList.length; i++) {
//        el.append(`<p>${employeeList[i].jobTitle}</p>`)
//    }
//    $('#jobTitleIn').val('');
// }

// function addEmployeeSalary () {
//     console.log('in addEmployee function');
//    let el = $('#salary-output');
//    el.empty();
//    for (let i=0; i<employeeList.length; i++) {
//        el.append(`<p>${employeeList[i].annualSalary}</p>`)
//    }
//    $('#annualSalaryIn').val('');
// }

// function addAllSalaries () {
//     let monthlySalary = 0;
//     let totalAnnualSalary = 0; 
//     let el = $ ('#monthly-cost');
//     el.empty();
//     for (let i=0; i<employeeList.length; i++) {
//         totalAnnualSalary += Number(employeeList[i].annualSalary);
//     }
//     monthlySalary = Math.round(totalAnnualSalary / 12);
//     console.log(monthlySalary);
//     el.append(`<p>${monthlySalary}</p>`)
// }














