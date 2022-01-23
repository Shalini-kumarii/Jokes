const mongoose = require("mongoose");
const DB_NAME = "jokers_db";

mongoose.connect("mongodb://localhost/" + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log(`Established a connections to ${DB_NAME}`))
    .catch( errObj => console.log('something went wong (ツ)_/¯', errObj ))