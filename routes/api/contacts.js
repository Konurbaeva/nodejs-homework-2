const express = require('express')
const contacts = require("../../models/contacts")
const { RequestError } = require("../../helpers")

const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().required(),
  email:Joi.string().required(),
  phone:Joi.string().required(),
})

const router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await contacts.listContacts();
  res.status(200).json(result) 
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await contacts.getContactById(contactId);
  
    if(!contact){
    throw RequestError(404, "Not found")
    } else{
     res.status(200).json(contact)
    }
  } catch(err){
   next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const { error } = addSchema.validate(req.body);

    if(error){
     throw RequestError(400, "Missing required field")
    } else {
      const result = await contacts.addContact(req.body)
      res.status(201).json(result)
    } } 
  catch(err){
   next(err)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try{
    const { error } = addSchema.validate(req.body);

    if(error){
      throw RequestError(400, "Missing required field")
    } 

    const { contactId } = req.params;

    const result = await contacts.updateById(contactId, req.body)

    if(!result) {
     throw RequestError(404, "Not found")
    }  
  } 
  catch(err){
   next(err)
  }
})

router.delete('/:contactId', async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await contacts.removeContact(contactId);
    
    if(contact){
      throw RequestError(200, "Contact deleted")
    } 
    else {
     throw RequestError(404, "Not found")
    }
})

module.exports = router
