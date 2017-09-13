/**
 * Created by aditya on 12/09/17.
 */

const MODULES = ['auth.json','customer.json','common.json'];
const _ = require('lodash');
const ErrorModule = require('./module').ErrorModule;

function build(){
    var modules = {};
    var redundancies = [];
    for(var i = 0; i < MODULES.length; i++){
        const config = require('../config/' + MODULES[i]);
        const module = new ErrorModule(_.toUpper(MODULES[i].replace(".json", "")), config);
        const processed = module.build();
        redundancies = redundancies.concat(module.redundancy);
        modules = _.assign(modules, processed);
    }

    const duplicates = _.filter(redundancies, function (value, index, iteratee) {
        return _.includes(iteratee, value, index + 1);
    });

    if(duplicates.length > 0){
        throw new Error("Found Duplicate error code :: " + duplicates);
    }

    return modules;
}

module.exports.build = build;