const express = require("express")

const { ctrlWrapper } = require("../../helpers")
const { schemas } = require("../../models/user")

const ctrl = require("../../controllers/auth")

const router = express.Router()


// router.post("/users/signup")
// TODO implement validateBody
router.post("/users/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

module.exports = router
