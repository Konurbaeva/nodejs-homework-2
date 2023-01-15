const express = require('express')

const { ctrlWrapper } = require("../../helpers")
const router = express.Router();

const ctrl = require("../../controllers")
const { authenticate } = require("../../middlewares")

// router.get('/', ctrlWrapper(ctrl.getAllContacts))
// router.get('/:contactId', ctrlWrapper(ctrl.getContact))
// router.post('/', ctrlWrapper(ctrl.createContact))
// router.put('/:contactId', ctrlWrapper(ctrl.updateContact))
// router.patch('/:contactId/favorite', ctrlWrapper(ctrl.patchContact))
// router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact))

router.get('/', ctrlWrapper(ctrl.getAllContacts))
router.get('/:contactId',authenticate, ctrlWrapper(ctrl.getContact))
router.post('/', authenticate, ctrlWrapper(ctrl.createContact))
router.put('/:contactId', authenticate, ctrlWrapper(ctrl.updateContact))
router.patch('/:contactId/favorite', authenticate, ctrlWrapper(ctrl.patchContact))
router.delete('/:contactId', authenticate, ctrlWrapper(ctrl.deleteContact))

// authenticate
module.exports = router;