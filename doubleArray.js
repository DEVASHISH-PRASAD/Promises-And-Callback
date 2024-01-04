/*
1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback.
*/
function doubled(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (typeof callback !== "function") {
    throw new Error("callback must be a function");
  }
  const doubledArray = arr.map(callback);
  return doubledArray;
}
inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
function callbackDoubledArray(element) {
  return element * 2;
}
outputArray = doubled(inputArray, callbackDoubledArray);
console.log("Input array::", inputArray);
console.log("Output array::", outputArray);
