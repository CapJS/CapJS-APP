
var sass = require("gulp-sass");

module.exports.gulp = function (gulp) {

	/*
	* Build sass files
	*/
	gulp.task("sass", function () {
		var preproSass = sass({
				includePaths: [
				],
			});

		preproSass.on("error", sass.logError);

		return gulp.src([
			"assets/sass/**/*.+(scss|sass)"
			])
			.pipe(preproSass)
			.pipe(gulp.dest("public/css"));
	});


	/*
	* Copy all images files.
	*/
	gulp.task("copy:images", function () {
		return gulp.src([
			"assets/images/**/*.+(png|jpg|jpeg)"
			])
			.pipe(gulp.dest("public/img"));
	});


	/*
	* Copy all javascript files.
	*/
	gulp.task("copy:javascript", function () {
		return gulp.src([
			"assets/js/**/*.+(js|map)"
			])
			.pipe(gulp.dest("public/js"));
	});


	/*
	* Copy all video files.
	*/
	gulp.task("copy:video", function (){
		return gulp.src("assets/videos/**/*.+(mp4|avi)")
			.pipe(gulp.dest("public/img/live"));
	})


	/*
	* Group tasks to copy files.
	*/
	gulp.task("copy", ["copy:images", "copy:javascript", "copy:video"])

	gulp.task("watch-to-build", ["copy", "sass"], function () {
		gulp.watch("assets/sass/**/*.+(sass|scss)", ["sass"]);
	})

}
