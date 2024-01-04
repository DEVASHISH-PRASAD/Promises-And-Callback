/*
4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.
*/
function alphabeticalOrder(listOfObjects, callback) {
  if (!Array.isArray(listOfObjects)) {
    throw new Error("List of objects must be an array");
  }
  if (typeof callback !== "function") {
    throw new Error("Callback must be a function");
  }

  const newArray = listOfObjects.map((elem) => elem.title);
  callback(newArray.sort());
}

const listOfObjects = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "Phyce",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function callbackSort(arrOfTitles) {
  console.log(arrOfTitles);
}

alphabeticalOrder(listOfObjects, callbackSort);
