const contacts = require("../../models/contacts")

const getAllContacts = async (req, res, next) => {
    const result = await contacts.listContacts();
    res.status(200).json(result) 
  }

  module.exports = getAllContacts;