/*
* Bootstrap App.
*
* - Define Path folder.
*/
var capjs = require("cap.js");
var path = require("path");
var colors = require("colors");



/*
* Set Working Directory
*/
process.chdir(path.resolve(__dirname, ".."));


/*
* App With CapJS.
* - Load Configs.
*/
var bootstrap = new capjs({
	"config": [
		capjs.readdir("config"),
	],
	"controller": [
		capjs.readdir("app/controller", {autokey:true}),
	],
	"policies": [
		capjs.readdir("app/policies", {autokey:true}),
	],
});



/*
* Globals Variables
* Easing the use to application with fast access.
*/
GLOBAL.logger = capjs.logger;
GLOBAL._ = capjs.lodash;
GLOBAL.lodash = capjs.lodash;

GLOBAL.Capjs = bootstrap;



/*
* Create Server Web.
* - run Cluster and
*/
bootstrap.listen();

