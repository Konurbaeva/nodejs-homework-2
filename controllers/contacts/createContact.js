const contacts = require("../../models/contacts")
const { RequestError } = require("../../helpers")

const { addSchema } = require("../../schemas/contactsSchema")

const createContact = async (req, res) => {
  
  const { error } = addSchema.validate(req.body);
  if(error){
   throw RequestError(400, "Missing required field")
  } else {
    const result = await contacts.addContact(req.body)
    res.status(201).json(result)
  
  }  }

module.exports = createContact;