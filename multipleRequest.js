/*
7. Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs.
*/

async function fetchMultipleAPI() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response1.ok || !response2.ok) {
      throw new Error(
        `HTTP Error! Status:${response1.status} and ${response2.status}`
      );
    }
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log({ todo: data1, post: data2 });
  } catch (error) {
    console.log(`Error fetching data : ${error.message}`);
  }
}

fetchMultipleAPI();
