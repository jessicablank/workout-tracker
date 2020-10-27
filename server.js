const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const addHtmlRoutes = require("./routes/html-routes");
const addAPIRoutes = require("./routes/api-routes");

// Connect to database environment 
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_ATLAS || "mongodb://localhost/workout",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
 );

// Sets up the Express app to handle data parsing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add logger middleware
app.use(morgan("dev"));

// Static middleware
app.use(express.static("public"));

// Require routes
addHtmlRoutes(app);
addAPIRoutes(app);

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`));