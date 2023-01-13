// const contacts = require("../../models/contacts")

const Contact = require("../../models/contactsSchema")

const getAllContacts = async (req, res) => {
    // const result = await contacts.listContacts();
    // res.status(200).json(result) 
    const result = await Contact.find()

    res.json(result)
  }

module.exports = getAllContacts;