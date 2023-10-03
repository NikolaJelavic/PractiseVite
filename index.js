import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import path from "path";
import ejs from "ejs";
import mongoose from "mongoose"; 

import redditData from "./data.json" assert { type: "json" };


const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MovieApp");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};


connectToMongoDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(redditData);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/ejs", (req, res) => {
  res.render("home.ejs");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  const name = subreddit;
  const description = data.description;
  const subscribers = data.subscribers;
  const posts = data.posts;

  res.render("subreddit", { name, description, subscribers, posts });
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});


const Movie = mongoose.model("Movie", movieSchema);


Movie.insertMany([
  { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { title: "Stand by Me", year: 1986, score: 8.6, rating: "PG-13" },
])
  .then((data) => {
    console.log("Data inserted successfully.");
    console.log(data);
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});












// import { franc } from 'franc';
// import langs from 'langs';
// import colors from 'colors';

// const input = process.argv[2];
// const langCode = franc(input);
// if (langCode === 'und') {
//     console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
// } else {
//     const language = langs.where("3", langCode);
//     if (language) {
//         console.log(colors.green(`Our best guess is: ${language.name}`));
//     } else {
//         console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
//     }
// }

//node index.js 'Maaari ba akong magpalit ng pera?'
