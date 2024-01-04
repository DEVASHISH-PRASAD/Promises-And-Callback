/*
6. Fetch results asynchronously.
Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.
*/
async function fetchDataAsynch() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP Error Status:${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error fetching data :${error.message}`);
  }
}

fetchDataAsynch();
