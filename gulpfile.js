var gulp = require("gulp");
var capjsgulp = require("./config/gulp");
var DockerTasks = require("gulp-docker-tasks");

var docker = new DockerTasks({
	workDir: __dirname,
});

docker.attach(gulp);

// Tasks in: config/gulp.js
capjsgulp.gulp(gulp);



