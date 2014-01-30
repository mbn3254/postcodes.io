var path = require("path")

var pagesController = require(path.join(__dirname, "../app/controllers/pages_controller")),
		postcodesController = require(path.join(__dirname, "../app/controllers/postcodes_controller"));

module.exports = function (app) {
	app.get("/", pagesController.home);
	app.get("/about", pagesController.about)
	app.get("/docs", pagesController.documentation);

	app.get("/postcodes", postcodesController.query);
	app.post("/postcodes", postcodesController.bulk);
	app.get("/random/postcodes", postcodesController.random);
	app.get("/postcodes/:postcode", postcodesController.show);
	app.get("/postcodes/:postcode/validate", postcodesController.valid);
	app.get("/postcodes/:postcode/autocomplete", postcodesController.autocomplete);	


	// Longitude latitude
	// app.get("/v1/postcodes")

	// Bulk longitude latitude
	// app.post("/v1/postcodes")
}