const contacts = require("../../models/contacts")
const { RequestError } = require("../../helpers")

const { addSchema } = require("../../schemas/contactsSchema")

const updateContact = async (req, res) => {

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

  module.exports = updateContact;