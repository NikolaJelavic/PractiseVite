import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
const express = require("express");
import path from "path";
import ejs from "ejs";
import redditData from "./data.json" assert { type: "json" };

// Create a function to connect to MongoDB
const connectToMongoDB = async () => {
  try {
    // Use await to ensure that the connection is established before continuing
    await mongoose.connect("mongodb://127.0.0.1:27017/MovieApp");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Call the function to connect to MongoDB
connectToMongoDB();

// const redditData = require('./data.json')
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const mongoose = require("mongoose");
const express = require("express");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  ratings: "R",
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
