/**
 * Created by aditya on 12/09/17.
 */
const inherits = require('util').inherits;

function APIError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

function ValidationError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(ValidationError, APIError);

function TypeError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(TypeError, APIError);

function IntegrityError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(IntegrityError, APIError);

function DuplicateError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(DuplicateError, APIError);

function AuthorizationError(code, type, message) {
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(AuthorizationError, APIError);

function RequiredFieldError(code, type, message){
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(RequiredFieldError, APIError);

function RequiredParamError(code, type, message){
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(RequiredParamError, APIError);


function NotFoundError(code, type, message){
    this.error_code = code;
    this.error_type = type;
    this.message = message;
}

inherits(NotFoundError, APIError);

module.exports = {
    APIError: APIError,
    ValidationError: ValidationError,
    TypeError: TypeError,
    IntegrityError: IntegrityError,
    DuplicateError: DuplicateError,
    AuthorizationError: AuthorizationError,
    RequiredFieldError: RequiredFieldError,
    RequiredParamError: RequiredParamError,
    NotFoundError: NotFoundError
};
