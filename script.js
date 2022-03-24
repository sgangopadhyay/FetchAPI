// The Fetch() API

const url = "https://623bf4808e9af58789499ff0.mockapi.io/suman/friends";

// The Tradational Way to use fetch() API using async & await function

async function Suman(url) {
  let data = await fetch(url);
  if (data.ok) {
    return data.json();
  } else {
    return data.status;
  }
}

let guvi = Suman(url);

guvi
  .then(function (value) {
    console.log(JSON.stringify(value));
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The fetch() API ran successfully !");
  });


// The mordern way to use the fetch() API

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(JSON.stringify(data)));
