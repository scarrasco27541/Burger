const path = require("path");
burger = require("../models/burger");

module.exports = function(app) {
	app.get("/", function(req, res) {
		burger.getBurgers(function(burgers) {
//			console.log(burgers);
			res.render(path.join(__dirname, "../views/index"), {"burgers":burgers});
		});
	});
	app.get("/burger/add/:burger_name", function(req, res) {
		burger.addBurger(req.params.burger_name, function() {
			res.redirect('/');
		});
	});
	app.get("/burger/eat/:burger_id", function(req, res) {
		burger.devourBurger(req.params.burger_id, function() {
			burger.getBurgers(function(burgers) {
				res.json(burgers);
			});
		});
	});
	app.post("/burger/add", function(req, res) {
		burger.addBurger(req.body.burger_name, function(burgers) {
			res.redirect('/');
		});
	});
};
