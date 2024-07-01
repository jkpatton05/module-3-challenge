
// Get a reference to the #add-employees-btn element//

const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
function collectEmployees() {
    // TODO: Get user input to create and return an array of employee objects
    const employeesArray = [];
    let addMoreEmployees = true;


    while (addMoreEmployees) {
        const firstName = prompt('Enter the Employees first name:')
        const lastName = prompt('Enter the Employees last name:')
        let salary = parseFloat(prompt('Enter the Employees salary:'))

        console.log(firstName, lastName, salary);

        const employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary,
        };
        employeesArray.push(employee);


        const continueAdding = confirm('Would you like to add another employee? (yes or no)')
        if (!continueAdding) {
            addMoreEmployees = false;
        }
    }
    return employeesArray;
}
// Calculate and display the average salary
function displayAverageSalary(employeesArray) {
    const totalSalary = employeesArray.reduce((total, employee) => total + employee.salary, 0);
    const averageSalary = totalSalary / employeesArray.length;
    console.log(`The average salary is: ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement('td');
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement('td');
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
};

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
