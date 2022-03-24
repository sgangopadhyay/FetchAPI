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

// POST Data / INSERT Data into an API Server in JSON format

const img_link =
  "https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";

// data to be inserted
const data = {
  first_name: "Suman",
  last_name: "Gangopadhyay",
  location: "Bangalore",
  image: img_link,
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("success:", data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
