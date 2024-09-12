require("dotenv").config();
const express = require("express");
const connection = require("./database/connection");
const app = express();

const port = process.env.PORT;

/* Middleware */
app.use(express.json());

// routes
const blog = require("./routes/blog");
app.use("/blog", blog);

connection().then(() => {
   app.listen(port, () => {
      console.log(`listening on port ${port}`);
   });
});
