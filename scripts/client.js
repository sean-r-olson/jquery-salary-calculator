console.log('JS');

$(document).ready(onReady);

let employeeList = [];
let maxMonthlyCosts = 20000;
let totalMonthlyCosts = 0;

function onReady () {
    console.log('in onReady function!');
    $('#addItemButton').on('click', renderEmployee);
    $('#addItemButton').on('click', displayMonthlyCosts);
    $('#output').on('click','.delete',deleteEmployeeInfo);
    $('#monthly-costs').on('click', redAlert);
}

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
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    addEmployee();
    redAlert();
}

function displayMonthlyCosts () {
    event.preventDefault();
    let el = $('#monthly-cost');
    el.empty();
    let monthlySalary = 0;
    let totalAnnualSalary = 0; 
    for (let i=0; i<employeeList.length; i++) {
        totalAnnualSalary += Number(employeeList[i].annualSalary);
        } 
        monthlySalary = Math.round(totalAnnualSalary / 12);
        $('#monthly-cost').append(`<p>${monthlySalary}</p>`);
        totalMonthlyCosts = monthlySalary;
        redAlert();
}

function addEmployee () {
    event.preventDefault();
    let el = $('#output');
    // let monthlySalary = 0;
    // let totalAnnualSalary = 0; 
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
            //  totalAnnualSalary += Number(employeeList[i].annualSalary);
    }
    // monthlySalary = Math.round(totalAnnualSalary / 12);
    // $('#monthly-cost').append(`<p>${monthlySalary}</p>`);
}

function deleteEmployeeInfo (event) {
    console.log('in delete task', $(this).parent().text());
    $(this).parent().remove();
}

function redAlert () {
        if (totalMonthlyCosts >= maxMonthlyCosts)
        $('#monthly-cost').addClass('red');
}
// function deleteEmployeeInfo (event) {
//     let el = $('#output');
//     for (let i=0; i<employeeList.length; i++) {
//         console.log('in for loop');
//         el.remove (
//             ` ${employeeList[i]} `
//         );
//     }
//     $(this).parent().remove();
// }



// function addMonthlyCosts () {
//     let monthlySalary = 0;
//     let totalAnnualSalary = 0; 
//     let el = $('monthly-cost');
//     el.empty();
//     for (let i=0; i<employeeList.length; i++) {
//         el.append ( `<tr>
//                     <th>${employeeList[i].annualSalary}</th>
//                     </tr>`
//         );
//                     totalAnnualSalary += Number(employeeList[i].annualSalary); 
//     }
//     monthlySalary = Math.round(totalAnnualSalary / 12);
//     $('#monthly-cost').append(`<p>${monthlySalary}</p>`);
//     monthlySalary += monthlySalary;

// }

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














