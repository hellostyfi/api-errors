/**
 * Created by aditya on 12/09/17.
 */

const _ = require('lodash');
const ERROR_MODELS = require('./error');

function camelCase(str){
    return _.chain(str).camelCase().upperFirst().value();
}

function allCaps(str){
    return _.toUpper(str);
}

function ErrorSubModule(subModuleName, errors){
    this.name = allCaps(subModuleName);
    this.clazz = camelCase(subModuleName+"Error");
    if(!_.has(ERROR_MODELS, this.clazz)){
        this.clazz = "APIError";
    }
    this.errors = {};
    this.redundancy = [];
    this.init(errors);
}

ErrorSubModule.prototype.init = function(errors){
    if(!_.isObject(errors) && !_.keys(errors).length > 0){
        throw new Error(errors + " should be of type object and should contain at least one key");
    }
    _.forOwn(errors, function (value, key) {
        if(!_.isObject(value) && !_.has(value, ['code', 'type'])){
            throw new Error(value + " should be of type object and should contain code and type");
        }
        const errorKey = allCaps(key);
        const errorType = value.type || errorKey + "_" + this.name;

        this.redundancy.push(value.code);

        this.errors[errorKey] = new ERROR_MODELS[this.clazz](value.code, errorType , value.message);

    }.bind(this));
};

ErrorSubModule.prototype.build = function(){
    const subModule = {};
    subModule[this.name] = this.errors;
    return subModule;
};

module.exports.ErrorSubModule = ErrorSubModule;