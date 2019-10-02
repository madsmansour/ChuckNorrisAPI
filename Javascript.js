//const fetch = require('node-fetch'); //skal bruges til at kører det node i konsollen til fetch

var categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
    ];
    
    var select = document.getElementById("select");  
    
    for(var i = 0; i < categories.length; i++) {
        var opt = categories[i];
        var el = document.createElement("option");
        el.textContent = opt + " fact";
        el.value = opt;
        select.appendChild(el);
    }
    
let x = () =>
{
  var e = document.getElementById("select");
  var value = e.options[e.selectedIndex].value;
  var optionValue = value;

fetch(`https://api.chucknorris.io/jokes/random?category=${optionValue}`, {
  credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
})
.then(response => response.json())
.then(data => {
  console.log(data.value) // Prints result from `response.json()`
  document.getElementById("textArea").value += data.value + "\n" + "\n";
})
.catch(error => console.error(error))
}

taClear = () => {
  document.getElementById("textArea").value = null;
}

let button2 = document.getElementById("clearText");
button2.addEventListener("click", taClear);

