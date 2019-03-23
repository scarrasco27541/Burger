const PORT = process.env.PORT || 8080;

const express = require("express")
const path = require("path");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./controllers/burgers_controller")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
