const { RequestError } = require("../../helpers")

const Contact = require("../../models/contactsSchema")

const { addSchema } = require("../../schemas/contactsSchema")

const createContact = async (req, res) => {

  const result = await Contact.create(req.body)
  res.status(201).json(result)

}

module.exports = createContact;