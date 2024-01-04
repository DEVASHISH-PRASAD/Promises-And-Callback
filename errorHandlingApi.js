/*
9. Error Handling
Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors
that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789
to simulate an error, and then display an error message on the webpage.
*/
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts123456789"
    );
    if (!response.ok) {
      throw new Error(`HTTP Error! Status:${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Error Fetching data: ${err.message}`);
  }
}

fetchData();
