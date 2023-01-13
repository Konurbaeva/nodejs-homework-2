const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const { addSchema } = require("../../schemas/contactsSchema")


const patchContact = async (req, res) => {

const { contactId } = req.params;

const result = await Contact.updateOne({contactId}, req.body)
res.json(result)

}

  module.exports = patchContact;