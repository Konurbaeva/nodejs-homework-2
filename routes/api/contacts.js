const express = require('express')

const { ctrlWrapper } = require("../../helpers")
const router = express.Router();

const ctrl = require("../../controllers")
const { authenticate } = require("../../middlewares")

router.get('/', authenticate, ctrlWrapper(ctrl.getAllContacts))
router.get('/:contactId',authenticate, ctrlWrapper(ctrl.getContact))
router.post('/', authenticate, ctrlWrapper(ctrl.createContact))
router.put('/:contactId', authenticate, ctrlWrapper(ctrl.updateContact))
router.patch('/:contactId/favorite', authenticate, ctrlWrapper(ctrl.patchContact))
router.delete('/:contactId', authenticate, ctrlWrapper(ctrl.deleteContact))

module.exports = router;