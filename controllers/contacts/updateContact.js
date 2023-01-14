const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const { addSchema } = require("../../schemas/contactsSchema")

const updateContact = async (req, res) => {

  const result = await Contact.updateOne(req.body)
  res.json(result)
  }

  module.exports = updateContact;