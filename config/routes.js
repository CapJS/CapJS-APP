/*
* Configuration of routes.
*/
var path = require("path");

module.exports.routes = {

	/*
	* Static Directori
	* Containt files, in path directori.
	*/
	"static /": ["public/"],

	/*
	*	Home Path (URL PAth: /).
	*/
	"get HOME": {
		"path": "/",
		"policies": ["autoPolicie"],
		"view": "index",
		"controller": ["SayController.home"],
	},

}
