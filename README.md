# README #

This repository contains registry of all STYFI API errors.

### What is this repository for? ###

* This module takes away inconvenience of developer of manually checking for duplicate error codes defined across multiple API projects 
while enforcing API Error standards.


### How do I get set up? ###

* npm install https://bitbucket.org/stylabs/api-errors
* Errors are exposed in a modular way. You will be able to access it module wise. 
 For eg : ERRORS.CUSTOMER.VALIDATION.EMAIL gives reference of a new ValidationError object.

### Contribution guidelines ###

* In order to add new error modules, simply add [module-name].json file to config folder.
* While runtime checks will be made for duplicate error codes and notified to developer in order to change them.

### Who do I talk to? ###

* Slack or email aditya :P