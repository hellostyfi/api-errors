/**
 * Created by aditya on 12/09/17.
 */

var builder = require('./error-module/module-builder');

const errorModules = builder.build();

module.exports.ERRORS = errorModules;