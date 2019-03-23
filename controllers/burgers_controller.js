//burger = require("../models/burger");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.send("All our burgers!");
	});
	app.get("/burger/add/:burger_name", function(req, res) {
		res.send("Add a burger: " + req.params.burger_name);
	});
	app.get("/burger/eat/:burger_id", function(req, res) {
		res.send("Eat a burger: " + req.params.burger_id);
	});
//	app.post("/burger/add", function(req, res) {
//		res.send("Add a burger: " + req.body.burger_name);
//	});
//	app.post("/burger/eat/:burger_id", function(req, res) {
//		res.send("Eat a burger: " + req.body.burger_id);
//	});
};
