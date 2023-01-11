const contacts = require("../../models/contacts")

const getContact = async (req, res, next) => {
    try {
      const { contactId } = req.params;
  
      const contact = await contacts.getContactById(contactId);
    
      if(!contact){
      throw RequestError(404, "Not found")
      } else{
       res.status(200).json(contact)
      }
    } catch(err){
     next(err)
    }
  }

  module.exports = getContact;