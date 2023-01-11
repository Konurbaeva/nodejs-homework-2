const contacts = require("../../models/contacts")

const deleteContact = async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await contacts.removeContact(contactId);
    
    if(contact){
      throw RequestError(200, "Contact deleted")
    } 
    else {
     throw RequestError(404, "Not found")
    }
}


module.exports = deleteContact;

