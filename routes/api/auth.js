const express = require("express")

const { ctrlWrapper } = require("../../helpers")
const { schemas } = require("../../models/user")

const { validateBody, authenticate, upload } = require("../../middlewares")

const ctrl = require("../../controllers/auth")

const router = express.Router()

router.post("/users/signup", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

router.post("/users/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

router.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent))

router.post("/users/logout", authenticate, ctrlWrapper(ctrl.logout))

// router.patch("/avatars", authenticate, upload.single("avatars"), ctrlWrapper(ctrl.updateAvatar))

router.patch(
  //  "/users/avatars",
    "/avatars",
    authenticate,
    upload.single("avatar"),
    ctrlWrapper(ctrl.updateAvatar)
  );

module.exports = router
