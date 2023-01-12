const express = require('express')

// const contacts = require("../../models/contacts")

const { ctrlWrapper } = require("../../helpers")
const router = express.Router();

const ctrl = require("../../controllers")

router.get('/', ctrlWrapper(ctrl.getAllContacts))
router.get('/:contactId', ctrlWrapper(ctrl.getContact))
router.post('/', ctrlWrapper(ctrl.createContact))
router.put('/:contactId', ctrlWrapper(ctrl.updateContact))
router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact))

module.exports = router;