// fetch
// it returns promise

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    if (response.ok) {
      // response.ok checks if response is successful
      return response.json(); // response.json returns a promise and also it gives the json data
    } else {
      throw new Error("Something went wrong!!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // specially in fetch it will only run if there is any network error
    console.log("inside catch");
    console.log(error);
  });
