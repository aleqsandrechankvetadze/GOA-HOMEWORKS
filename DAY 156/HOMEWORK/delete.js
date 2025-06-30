// magaliti aris linkis


fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(res => console.log("DELETE status:", res.status));
