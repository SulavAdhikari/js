// Check if a provided argument is valid JSON
function isValidJSON(arg) {
    try {
      JSON.parse(arg);
      return true;
    } catch (error) {
      return false;
    }
  }
  
  const input1 = '{"name":"John","age":30,"city":"New York"}';
  const input2 = 'invalid json';
  
  console.log("\nTest 1: " + isValidJSON(input1) + " (should be true)"); // Output: true
  console.log("Test 2: " + isValidJSON(input2) + " (should be false)"); // Output: false
  