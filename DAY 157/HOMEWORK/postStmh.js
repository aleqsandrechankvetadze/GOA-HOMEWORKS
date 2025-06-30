// ლინკის მაგალითი

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "Post body",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("POST result:", data));
