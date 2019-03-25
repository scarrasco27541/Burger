const PORT = process.env.PORT || 8080;

const express = require("express")
const path = require("path");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var burgerController = require("./controllers/burgers_controller");
burgerController(app);

// ---
// HELP FROM:
// https://stackoverflow.com/questions/43704187/cant-get-express-handlebars-render-an-html-page
// https://hackersandslackers.com/handlebars-templating-in-expressjs/
// ---
var hbs = require( 'express-handlebars');
app.engine('handlebars', hbs({
  defaultLayout: 'main',
  extname: 'handlebars',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
// ---

// https://expressjs.com/en/starter/static-files.html
// This line sets 'public' as a static location that routes the 'normal' way
// For example, even without routing, '/this/folder/file.txt' will bring up file.txt an display it
app.use(express.static('public'))
// ---


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
