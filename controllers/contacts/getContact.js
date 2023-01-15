const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const getContact = async (req, res) => {
     const { contactId } = req.params;
     const result = await Contact.findById(contactId)

     if(!result) {
      throw RequestError(404, "Not found");
  }

     res.json(result)
  }

  module.exports = getContact;