// const fetch = require('node-fetch');


let x = () =>
{
fetch('https://api.chucknorris.io/jokes/random', {
  credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
})
.then(response => response.json())
.then(data => {
  console.log(data.value) // Prints result from `response.json()`
  document.getElementById("textArea").value += data.value + "\n" + "\n";
})
.catch(error => console.error(error))
}




