// Check if a specified value is undefined
function isUndefined(value) {
    return typeof value == 'undefined';
  }
  
  const value1 = undefined;
  const value2 = 'defined';
  
  console.log("Test 1:"+isUndefined(value1) + "(should be true)"); // Output: true
  console.log("Test 2:"+isUndefined(value2) + "(should be false)"); // Output: false
  