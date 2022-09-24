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
  let obj = {};
  // If str is not a str just return empty obj
  if (typeof(str) !== "string") return obj
  // Iterate over @str for each character
  for (let char of str) {
    
    if (/[\w]/.test(char)) {
        // If char is alphanumberic and is  and is key in object, add one to count 
        if (obj[char.toLowerCase()]) {
            obj[char.toLowerCase()] += 1;
        } else {
            // If char is alphanumeric and not in object ass it and set value to 1
            obj[char.toLowerCase()] = 1;
        }
    } else {
        // If char is something else, do nothing
        continue;
    }
  }
  //  return object
  console.log(obj)
  return obj;
}
