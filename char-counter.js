// ***************************************
// Write a function that takes a string and return the number of each characters in that string
// ***************************************

// 1. Simples Examples
charCount("aaaa"); // {a: 4}
charCount("hello"); // { h: 1, e: 1, l: 2, o: 1 }

// 2. More Complex Eamples
charCount("Ny phone number is 345432"); // space and numbers ir symbols
("Hello hi"); // How do we handle casing
charCount(2233);
charCount("");

/***************************
BREAK IT DOWN
****************************/
// Interviewer say on count alphanumerics
function charCount(str = "") {
  // Make object to return at end
  // Iterate over @str for each character
    // If char is alphanumberic and is  and is key in object, add one to count
    // If char is alphanumeric and not in object ass it and set value to 1
    // If char is something else, do nothing
  //  return object
}
