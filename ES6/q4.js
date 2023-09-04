// Check if a specified value is null
function isNull(value) {
    return value === null;
  }
  
  const value1 = null;
  const value2 = 'not null';
  
  console.log("Test 1:"+isNull(value1) + "(should be true)"); // Output: true
  console.log("Test 2:"+isNull(value2) + "(should be false)"); // Output: false
  