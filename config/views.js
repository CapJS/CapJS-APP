/*
* Configuracion de las vistas del sistema.
*/
// var path = require("path");

module.exports.views = {

	/*
	* Folder Contents Views.
	* Default "app/views"
	*/
	"views": "app/views",

	/*
	* Engine Setting.
	*/
	"engine": {
		"ext": "jade",
		"callback": require("jade").__express,
	},

}

