// import mongoose
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String,
}, {timestamps: true})

// the model - this is what we use to make the actual queries to the db
const Joke = mongoose.model("Joke", JokeSchema);

// export the model
module.exports = Joke;