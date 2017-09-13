/**
 * Created by aditya on 12/09/17.
 */

var builder = require('./error-module/module-builder');

const errorModules = builder.build();

module.exports.Errors = errorModules;

module.exports.Models = require('./error-module/error');