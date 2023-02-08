const express = require("express");
const app = express();
const cors = require("cors");

//requires routes
const stuffRoutes = require("./routes/stuff");
const msgRoutes = require("./routes/message");

require("dotenv").config(); 
//Connecting to mongoDB  // after dotenv 
require("./connect_mongodb/mongodb"); 
//Parsing
app.use(express.json()); //const bodyParser = require("body-parser");
app.use(cors());

// //Setting routes
app.use("/api/commandes", stuffRoutes);
app.use("/api/messages", msgRoutes);

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running on port ${process.env.PORT}`);
});