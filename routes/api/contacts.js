const express = require('express')
const contacts = require("../../models/contacts")
// const nanoid = require("nanoid");

const { RequestError } = require("../../helpers")

const Joi = require('joi');


const router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200).json(result) 
})

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;

//     const contact = await contacts.getContactById(contactId);
  
//     if(contact === null){
//     res.status(404).json({message: "Not found"})
//     } else{
//      res.status(200).json(contact)
//     }
//   } catch(err){
//     res.status(500).json({message: "Server error"} )
//   }
// })

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await contacts.getContactById(contactId);
  
    if(!contact){
    res.status(404).json({message: "Not found"})
   //  throw RequestError(404, "Not found")
    } else{
     res.status(200).json(contact)
    }
  } catch(err){
    res.status(500).json({message: "Server error"} )
  }
})


// Если с body все хорошо, добавляет уникальный идентификатор в объект контакта
// Вызывает функцию addContact(body) для сохранения контакта в файле contacts.json
// По результату работы функции возвращает объект с добавленным id {id, name, email, phone} и статусом 201

router.post('/', async (req, res, next) => {
//   try {
//     const { name, email, phone } = req.body;
//     if (!name || !email || !phone) {
//       return res.status(400).json({ message: 'Missing required fields' });
//   } else {
  
//    const newContact = {  id: nanoid(), name, email, phone };
//    const newContactReqBody = await contacts.addContact(newContact)

//    //  const newContactReqBody = await contacts.addContact(req.body)
//    res.status(201).json(newContactReqBody)
//   }
// } catch(err) {
//     res.status(500).json({message: "Something went wrong"} )
//   }
             
const result = await contacts.addContact(req.body);

res.status(201).json(result);
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
