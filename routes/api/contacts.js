const express = require('express')
const contacts = require("../../models/contacts")

const router = express.Router();

const ctrlWrapper = require("../../controllers/contacts")

router.get('/', ctrlWrapper.getAllContacts)

// router.get('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params;

//     const contact = await contacts.getContactById(contactId);
  
//     if(!contact){
//     throw RequestError(404, "Not found")
//     } else{
//      res.status(200).json(contact)
//     }
//   } catch(err){
//    next(err)
//   }
// })
router.get('/:contactId', ctrlWrapper.getContact)


// router.post('/', async (req, res, next) => {
//   try{
//     const { error } = addSchema.validate(req.body);

//     if(error){
//      throw RequestError(400, "Missing required field")
//     } else {
//       const result = await contacts.addContact(req.body)
//       res.status(201).json(result)
//     } } 
//   catch(err){
//    next(err)
//   }
// })
router.post('/', ctrlWrapper.createContact)

router.put('/:contactId', ctrlWrapper.updateContact)

router.delete('/:contactId', ctrlWrapper.deleteContact)

module.exports = router
