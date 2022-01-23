const express = require("express");
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), express.urlencoded({extended:true}));

//  connect mongodb by requiring the file here
require("./config/mongoose.config");

//  create routes to execute the functions to the db

require("./routes/jokes.routes")(app);


app.listen(PORT, () => console.log(`server up on PORT: ${PORT}`));