const { RequestError } = require("../helpers")
// const { schema } = require("../models/contactsSchema")


const validateBody = schema => {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error) {
            next(RequestError(400, error.message));
        }
        next()
    }
    return func;
}

module.exports = validateBody