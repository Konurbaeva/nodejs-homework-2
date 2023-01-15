const Contact = require("../../models/contactsSchema")

// const getAllContacts = async (req, res) => {
//     const result = await Contact.find()
//     res.json(result)
//   }

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user

  console.log(req.user);
  
  const result = await Contact.find({owner})

  res.json(result)
}

module.exports = getAllContacts;