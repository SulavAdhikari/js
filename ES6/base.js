const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = { name: "Costas", address: { street: "Lalaland 12" } };

// Exercise 1: Print the name of each company using forEach
companies.forEach((company) => {
  console.log('\nExercise: 1')
  console.log(company.name);
});

// Exercise 2: Print the name of each company that started after 1987
companies.forEach((company) => {
  if (company.start > 1987) {
    console.log('\nExercise: 2')
    console.log(company.name);
  }
});

// Exercise 3: Get companies with category Retail, increment their start by 1, and append to DOM
const retailCompanies = companies.filter((company) => company.category === "Retail");
retailCompanies.forEach((company) => {
  company.start++;
  
  const { window } = new JSDOM();
  const document = window.document;

  const div = document.createElement("div");
  div.innerHTML = `
    <p>Name: ${company.name}</p>
    <p>Category: ${company.category}</p>
    <p>Start: ${company.start}</p>
    <p>End: ${company.end}</p>
  `;
  document.body.appendChild(div);
  console.log('\nExercise: 3')
});

// Exercise 4: Sort the companies based on their end date in ascending order
const sortedCompanies = companies.sort((a, b) => a.end - b.end);
console.log('\nExercise: 4')
console.log(sortedCompanies);

// Exercise 5: Sort the ages array in descending order
const descendingAges = ages.sort((a, b) => b - a);
console.log('\nExercise: 5')
console.log(descendingAges);

// Exercise 6: Print the sum of all ages using reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log('\nExercise: 6')
console.log(ageSum);

// Exercise 7: Create a new object with properties from companies[0] and a print method
const { name, category } = companies[0];
const companyObject = { name, category, print: () => console.log(name) };
console.log('\nExercise: 7')
companyObject.print();

// Exercise 8: Create a function to sum an unknown number of number arguments
function sumNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log('\nExercise: 8')
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

// Exercise 9: Create a function to add arguments to an array
function addToArray(...args) {
  const resultArray = [];
  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      resultArray.push(...arg);
    } else {
      resultArray.push(arg);
    }
  });
  return resultArray;
}
console.log('\nExercise: 9')
console.log(addToArray(1, [2, 3], 4, [5, 6])); // Output: [1, 2, 3, 4, 5, 6]

// Exercise 10: Destructure the property street from the person object
const { address: { street } } = person;
console.log('\nExercise: 10')
console.log(street);

// Exercise 11: Create a function that returns an incrementing number
function createIncrementingNumberGenerator() {
  let count = 0;
  return () => count++;
}
const incrementNumber = createIncrementingNumberGenerator();
console.log('\nExercise: 11')
console.log(incrementNumber()); // Output: 0
console.log(incrementNumber()); // Output: 1

// Exercise 12: Parse query parameters from a URL into an object
function parseQueryParameters(url) {
  const queryString = url.split("?")[1];
  if (!queryString) return {};
  const keyValuePairs = queryString.split("&");
  const queryParams = {};
  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  });
  return queryParams;
}
const sampleURL = "https://example.com/?name=prabin&age=21&city=Kathmandu";
const parsedParams = parseQueryParameters(sampleURL);
console.log('\nExercise: 12')
console.log(parsedParams);
