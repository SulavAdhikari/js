// Check if a string is in uppercase
function isUpperCase(str) {
    return str === str.toUpperCase();
  }
  
  const text1 = 'HELLO';
  const text2 = 'Hello';
  
  console.log("Test 1:" + isUpperCase(text1) + "(should be true)"); // Output: true
  console.log("Test 2:" + isUpperCase(text2) + "(should be false)"); // Output: false
  