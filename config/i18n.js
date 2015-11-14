/*
* i18n Options
* https://github.com/mashpie/i18n-node#list-of-configuration-options
*/


module.exports.i18n = {
  // setup some locales - other locales default to en silently
  locales: ['en', 'es'],

  // fall back from Dutch to German
  // fallbacks: {'nl': 'es'},

  // you may alter a site wide default locale
  defaultLocale: 'es',

  // sets a custom cookie name to parse locale settings from  - defaults to NULL
  // cookie: 'yourcookiename',

  // where to store json files - defaults to './locales' relative to modules directory
  directory: 'config/locales',

  // whether to write new locale information to disk - defaults to true
  // updateFiles: false,

  // what to use as the indentation unit - defaults to "\t"
  indent: "\t",

  // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
  extension: '.js',

  // setting prefix of json files name - default to none '' (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
  prefix: 'webapp-',

  // enable object notation
  objectNotation: false,

  // setting of log level DEBUG - default to require('debug')('i18n:debug')
  logDebugFn: function (msg) {
    logger.log('debug', msg);
  },

  // setting of log level WARN - default to require('debug')('i18n:warn')
  logWarnFn: function (msg) {
    logger.log('warn', msg);
  },

  // setting of log level ERROR - default to require('debug')('i18n:error')
  logErrorFn: function (msg) {
    logger.log('error', msg);
  },
}