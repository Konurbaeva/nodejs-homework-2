const express = require('express')

const { ctrlWrapper } = require("../../helpers")
const router = express.Router();

const ctrl = require("../../controllers")

router.get('/', ctrlWrapper(ctrl.getAllContacts))
router.get('/:contactId', ctrlWrapper(ctrl.getContact))
router.post('/', ctrlWrapper(ctrl.createContact))
router.put('/:contactId', ctrlWrapper(ctrl.updateContact))
router.patch('/:contactId/favorite', ctrlWrapper(ctrl.patchContact))
router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact))

module.exports = router;