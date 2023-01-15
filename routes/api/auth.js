const express = require("express")

const { ctrlWrapper } = require("../../helpers")
const { schemas } = require("../../models/user")

// const { validateBody, authenticate } = require("../../middlewares")

const { validateBody } = require("../../middlewares")

const ctrl = require("../../controllers/auth")

const router = express.Router()

router.post("/users/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

router.post("/users/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))


module.exports = router
