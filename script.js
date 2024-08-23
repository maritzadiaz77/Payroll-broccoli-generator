// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  //creating addemployee to hold a boolean
  let addEmployee = true;
  //while loop to addEmployee,keep going until an employee is false
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    // Validate salary input
    if (isNaN (salary)) {
      salary= 0;
    }
    // Create employee object and add to array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });
//asking to add employee. will return true or false.If addEmployee is false it stops loop
    addEmployee = confirm("Do you want to add another employee?");
    console.log(addEmployee);
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  // Calculate total salary
  //+= total salary equals employee salary + total salary
  //param is what we're calling each item in the array and then using it on line44
  employeesArray.forEach(function (employee) {
    //.foreach will run this for each employee
    totalSalary += employee.salary;
  });

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display the average salary
  console.log(
    `The average employee salary between our ${
      employeesArray.length
    } employee(s) is $${averageSalary.toFixed(2)}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Select the random employee
  const randomEmployee = employeesArray[randomIndex];

  // Display the random employee's information
  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

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
addEmployeesBtn.addEventListener("click", trackEmployeeData);
