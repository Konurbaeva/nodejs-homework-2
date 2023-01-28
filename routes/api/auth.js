const express = require("express")

const { ctrlWrapper } = require("../../helpers")
const { schemas } = require("../../models/user")

const { validateBody, authenticate, upload } = require("../../middlewares")

const ctrl = require("../../controllers/auth")

const router = express.Router()

router.post("/users/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify), ctrlWrapper(ctrl.resendVerifyEmail))

router.post("/verify", validateBody(schemas.emailSchema),)

router.post("/users/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

router.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent))

router.post("/users/logout", authenticate, ctrlWrapper(ctrl.logout))

router.patch(
    "/users/avatars",
    authenticate,
    upload.single("avatar"),
    ctrlWrapper(ctrl.updateAvatar)
  );

module.exports = router
