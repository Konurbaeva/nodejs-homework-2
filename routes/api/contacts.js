const express = require('express')
const contacts = require("../../models/contacts")


const router = express.Router()

// возвращает массив всех контактов в json-формате со статусом 200

router.get('/', async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200)
  res.json(result)
})

// GET /api/contacts/:id
// Не получает body
// Получает параметр id
// вызывает функцию getById для работы с json-файлом contacts.json
// если такой id есть, возвращает объект контакта в json-формате со статусом 200
// если такого id нет, возвращает json с ключом "message": "Not found" и статусом 404

router.get('/:contactId', async (req, res, next) => {
 
  try {
    const { contactId } = req.params;

    const contact = await contacts.getContactById(contactId);
  
    if(contact === null){
   res.status(404).json({message: "Not found"})
    } else{
      res.json(contact)
    }
  } catch(err){
    res.status(500).json({message: "Server error"} )
  }
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
