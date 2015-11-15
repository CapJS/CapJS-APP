var gulp = require("gulp");
var capjsgulp = require("./config/gulp");
var DockerTasks = require("gulp-docker-tasks");

var docker = new DockerTasks({
	workDir: __dirname,
	names: {
		"build": "docker-build",
		"deploy": "docker-deploy",
		"terminate": "docker-terminate",
		"start": "docker-start",
		"stop": "docker-stop",
		"redeploy": "docker-redeploy",
		"rebuild": "docker-rebuild",
		"logs": "docker-logs",
	},
});

docker.attach(gulp);

// Tasks in: config/gulp.js
capjsgulp.gulp(gulp);

