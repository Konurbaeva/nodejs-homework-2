const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const getContact = async (req, res) => {
     const { contactId } = req.params;
     const result = await Contact.findById(contactId)

     res.json(result)
  }

  module.exports = getContact;