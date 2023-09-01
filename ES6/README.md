<h1>ES6 javascript questions</h1>

<h3>based on the code below do the exercises</h3>

```
const companies = [ { name: "Company One", category: "Finance", start: 1981, end: 2004 },
 { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
      { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
       { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 } ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = { name: "Costas", address: { street: "Lalaland 12" } };
```

<h4>Exercise 1:</h4>
print the name of each company using forEach

<h4>Exercise 2:</h4>
print the name of each company that started after 1987

<h4>Exercise 3:</h4>
get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name, the category, the start and the end in paragraphs elements

<h4>Exercise 4:</h4>
sort the companies based on their end date in ascending order

<h4>Exercise 5:</h4>
sort the ages array in descending order

<h4>Exercise 6:</h4>
print the sum if you add all the ages using reduce

<h4>Exercise 7:</h4>
make an new object that has the properties of name and category same as the companies[0] and a method print that prints out the name, use object destructuring and ES6 JS

<h4>Exercise 8:</h4>
create a function that takes an unknown number of arguments that are numbers and return their sum;

<h4>Exercise 9:</h4>
make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array it should add it's values to the array that will be returned by the function

<h4>Exercise 10:</h4>
distructure the property street in a variable named street from the object person

<h4>Exercise 11:</h4>
write a function that every time you call it, it returns a number that increments starting from 0

<h4>Exercise 12:</h4>
create a function that distructures the query parameters of a url and adds them in an object as key value pairs and then returns the object

<hr>

<h3></h3>
Q1: Write a JavaScript program to check if the provided argument is a valid JSON.
Q2: Write a JavaScript program to check if a given string is upper case or not
Q3: Write a JavaScript program that will return true if the specified value is undefined, false otherwise
Q4: Write a JavaScript program that will return true if the specified value is null, false otherwise.