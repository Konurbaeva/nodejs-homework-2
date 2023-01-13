const Contact = require("../../models/contactsSchema")
const { RequestError } = require("../../helpers")

const deleteContact = async (req, res) => {
    const { contactId } = req.params;

    const result = await Contact.deleteOne({contactId})
    res.status(200).json(result)
}


module.exports = deleteContact;

