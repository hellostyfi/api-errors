/**
 * Created by aditya on 12/09/17.
 */

const MODULES = ['auth.json','customer.json','common.json'];
const _ = require('lodash');
const ErrorModule = require('./module').ErrorModule;

function build(){
    var modules = {};
    for(var i = 0; i < MODULES.length; i++){
        const config = require('../config/' + MODULES[i]);
        const module = new ErrorModule(_.toUpper(MODULES[i].replace(".json", "")), config);
        modules = _.assign(modules, module.build());
    }
    return modules;
}

module.exports.build = build;