/**
 * Created by aditya on 12/09/17.
 */
const inherits = require('util').inherits;

function APIError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message || null;
}

function ValidationError(code, type, message) {
    APIError.call(this, code,type,message);
}

inherits(ValidationError, APIError);

function TypeError(code, type) {
    APIError.call(this, code,type);
    this.required_data_type = null;
}

TypeError.prototype.set = function(message, dataType){
    this.message = message;
    this.required_data_type = dataType;
};

inherits(TypeError, APIError);

function IntegrityError(code, type, message) {
    APIError.call(this, code,type, message);
}

inherits(IntegrityError, APIError);

function DuplicateError(code, type, message) {
    APIError.call(this, code,type, message);
}

inherits(DuplicateError, APIError);

function AuthorizationError(code, type, message) {
    APIError.call(this, code, type, message);
}

inherits(AuthorizationError, APIError);

function AuthenticationError(code, type, message) {
    APIError.call(this, code, type, message);
}

inherits(AuthenticationError, APIError);

function RequiredError(code, type){
    APIError.call(this, code,type);
    this.field = null;
}

inherits(RequiredError, APIError);

function NotFoundError(code, type, message, entity_id, entity_type){
    APIError.call(this, code,type);
    this.entity_id = null;
    this.entity_type = null;
}

inherits(NotFoundError, APIError);

module.exports = {
    APIError: APIError,
    ValidationError: ValidationError,
    TypeError: TypeError,
    IntegrityError: IntegrityError,
    DuplicateError: DuplicateError,
    AuthenticationError: AuthenticationError,
    AuthorizationError: AuthorizationError,
    RequiredError: RequiredError,
    NotFoundError: NotFoundError
};
