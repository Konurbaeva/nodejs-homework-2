// const contacts = require("../../models/contacts")

const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const getContact = async (req, res) => {
     const { contactId } = req.params;
    //   const contact = await contacts.getContactById(contactId);
    
    //   if(!contact){
    //   throw RequestError(404, "Not found")
    //   } else{
    //    res.status(200).json(contact)
    //   }
  }

  module.exports = getContact;