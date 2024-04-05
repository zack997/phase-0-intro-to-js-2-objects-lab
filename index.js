// Write your solution in this file!
// Initialize the employee Object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };
  
  // Function to update an employee Object with a new key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to destructively update an employee Object with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from an employee Object without mutating the original Object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete a key-value pair from an employee Object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log("Original Employee:", employee);
  
  // Test updateEmployeeWithKeyAndValue()
  const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated Employee (non-destructive):", updatedEmployee1);
  
  // Test destructivelyUpdateEmployeeWithKeyAndValue()
  const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");
  console.log("Updated Employee (destructive):", updatedEmployee2);
  
  // Test deleteFromEmployeeByKey()
  const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee without Name:", employeeWithoutName);
  
  // Test destructivelyDeleteFromEmployeeByKey()
  const employeeWithoutStreetAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Street Address:", employeeWithoutStreetAddress);
  
  // Original employee Object remains unchanged
  console.log("Original Employee (unchanged):", employee);
  