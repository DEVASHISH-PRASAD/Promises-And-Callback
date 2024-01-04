/*
2. String Manipulation.
Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
with the manipulated string or the new string to the console.
*/
function manipulateString(str) {
  const manipulatedString = str.toUpperCase();

  return function logString() {
    console.log("The manipulated string is::", manipulatedString);
  };
}
const logStringCallback = manipulateString("hello,boy");
logStringCallback();
