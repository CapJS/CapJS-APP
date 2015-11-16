
module.exports.http = {
	// "behavior": {
	// 	"order": [
	// 	],
	// },
	"middleware": {
    "requestLogger": function (req, res, next) {
      logger.deb("Requested ::".red, req.method, req.url);
      return next();
    },

		"order": [
			"requestLogger",
			"resView",
		],
	},

	"cacheControl": "9 days",

	"port": process.env.PORT || 8080,
	"host": process.env.HOST || "localhost",

}
