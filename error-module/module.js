/**
 * Created by aditya on 12/09/17.
 */

const _ = require('lodash');
const ErrorSubModule = require('./submodule').ErrorSubModule;

function allCaps(str){
    return _.toUpper(str);
}

function ErrorModule(moduleName, subModules){
    this.name = allCaps(moduleName);
    this.subModules = [];
    this.redundancy = [];
    this.init(subModules);
}

ErrorModule.prototype.init = function(subModules){
    if(!_.isObject(subModules) && !_.keys(subModules).length > 0){
        throw new Error(subModules + " should be of type object and should contain at least one key");
    }
    _.forOwn(subModules, function(value, key){
        const subModuleKey = allCaps(key);
        this.subModules.push(new ErrorSubModule(subModuleKey, value));
    }.bind(this));
};

ErrorModule.prototype.build = function(){
    const submodules = {};
    const module = {};

    _.forEach(this.subModules, function(subModule){
        this.redundancy = this.redundancy.concat(subModule.redundancy);
        _.assign(submodules, subModule.build());
    }.bind(this));

    module[this.name] = submodules;
    return module;
};

module.exports.ErrorModule = ErrorModule;