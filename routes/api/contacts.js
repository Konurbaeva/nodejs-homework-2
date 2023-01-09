const express = require('express')
const contacts = require("../../models/contacts")


const router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200).json(result) 
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await contacts.getContactById(contactId);
  
    if(contact === null){
    res.status(404).json({message: "Not found"})
    } else{
     res.status(200).json(contact)
    }
  } catch(err){
    res.status(500).json({message: "Server error"} )
  }
})

// Если с body все хорошо, добавляет уникальный идентификатор в объект контакта

router.post('/', async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    const newContact = {
      
    }
  
    const newContactReqBody = await contacts.addContact(newContact)

    if(newContact.name || newContact.email || newContact.phone){
      res.status(400).json({"message": "missing required field"})
      } else{
       res.status(201).json(newContactReqBody)
      }
  } catch(err) {
    res.status(500).json({message: "Server error"} )
  }
})

router.delete('/:contactId', async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await contacts.removeContact(contactId);
    
    if(contact){
      res.status(200).json({"message": "contact deleted"})
    } else {
      res.status(404).json({ "message": "Not found" })
    }
})


router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
