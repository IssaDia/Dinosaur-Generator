const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
require("dotenv").config();


app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});

app.get('/dinoname', async(request, response) => {
const fetchApi = await fetch(
  "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "x-rapidapi-host": process.env.RAPID_API_HOST,
    },
  }
)
const dinoNameResponse= await fetchApi.json();
response.json(dinoNameResponse)
});

app.get("/dinoimage", async (request, response) => {
  const fetchApi = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": process.env.RAPID_API_HOST_IMAGE,
      },
    }
  );
  const dinoImageResponse = await fetchApi.json();
  response.json(dinoImageResponse);
});

