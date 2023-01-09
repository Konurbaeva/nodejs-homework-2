const express = require('express')
const contacts = require("../../models/contacts")


const router = express.Router()

// возвращает массив всех контактов в json-формате со статусом 200

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

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })


// Получает body в формате {name, email, phone} (все поля обязательны)
// Если в body нет каких-то обязательных полей, возвращает json с ключом {"message": "missing required name field"} и статусом 400
// Если с body все хорошо, добавляет уникальный идентификатор в объект контакта
// Вызывает функцию addContact(body) для сохранения контакта в файле contacts.json
// По результату работы функции возвращает объект с добавленным id {id, name, email, phone} и статусом 201

// router.post('/', async (req, res, next) => {
//   // res.json({ message: 'template message' })

  // TODO add JOI validation for a new object

//   try {
//     const {name, email, phone} = req.body;

//     const reqBody = await contacts.addContact(id, name, email, phone)

   
//   } catch(err) {
//     res.status(500).json({message: "Server error"} )
//   }
// })

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
