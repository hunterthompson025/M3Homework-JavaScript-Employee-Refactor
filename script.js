// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

// Define a function to collect employee data
const collectEmployees = function() {
    const employeeArray = []; // Array to store employees
    
    let collect = true;

    // Loop to gather multiple employees data
    while (collect) {
      const firstName = prompt("Enter first name:");
      
      // If user selects cancel the loop ends
      if (!firstName) {
        break;
      }
  
      const lastName = prompt("Enter last name:");
      const salary = parseInt(prompt("Enter salary:"));
      
      
      // Create an object with the collected data
      const employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary,
      };
      collect = confirm("Add another employee?");
      // Add the object to the employees array
      employeeArray.push(employee);
    }
  
    return employeeArray; // Return the array of employee objects
  };

// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // Calculate and display the average salary
    let sum = 0;
    for(let i = 0; i < employeesArray.length; i++) {
      sum += employeesArray[i].salary;
    }
    const average = sum / employeesArray.length;
    console.log(`The average salary is ${average}.`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    //  Select and display a random employee
    const index = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[index];
    console.log(` Congrats ${randomEmployee.firstName} ${randomEmployee.lastName}, you win!!`);
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

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

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
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

trackEmployeeData();