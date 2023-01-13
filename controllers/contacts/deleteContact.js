// const contacts = require("../../models/contacts")

const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const deleteContact = async (req, res) => {
    const { contactId } = req.params;

    const result = await Contact.deleteOne({contactId})
    res.status(200).json(result)

    // const contact = await contacts.removeContact(contactId);
    
    // if(contact){
    //   throw RequestError(200, "Contact deleted")
    // } 
    // else {
    //  throw RequestError(404, "Not found")
    // }
}


module.exports = deleteContact;

