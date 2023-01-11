const contacts = require("../../models/contacts")
const { RequestError } = require("../../helpers")

const updateContact = async (req, res, next) => {
    try{
      const { error } = addSchema.validate(req.body);
  
      if(error){
        throw RequestError(400, "Missing required field")
      } 
  
      const { contactId } = req.params;
  
      const result = await contacts.updateById(contactId, req.body)
  
      if(!result) {
       throw RequestError(404, "Not found")
      }  
    } 
    catch(err){
     next(err)
    }
  }

  module.exports = updateContact;