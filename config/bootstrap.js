
var gulp = require("gulp");

module.exports.bootstrap = function (capjs) {

	/**
	* Create a gulp tasks.
	*/
	logger.deb("Starting Gulp.");
	capjs.config("gulp")(gulp);
	gulp.start("watch-to-build");



}
