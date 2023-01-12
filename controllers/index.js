const getAllContacts = require("./contacts/getAllContacts")
const getContact = require("./contacts/getContact")
const createContact = require("./contacts/createContact")
const  updateContact = require("./contacts/updateContact")
const deleteContact = require("./contacts/deleteContact")

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}