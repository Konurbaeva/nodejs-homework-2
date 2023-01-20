const { User } = require("../../models/user")

const { RequestError, sendEmail } = require("../../helpers")

const {nanoid} = require("nanoid")

const { BASE_URL } = process.env

const bcrypt = require("bcrypt")
const gravatar = require("gravatar")

const register = async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email})

    if(user){
        throw RequestError(409, "409 Conflict: Email already in use")
    }


    const hashPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email)

   const verificationToken = nanoid()

    const newUser = await User.create({...req.body, password:hashPassword, avatarURL, verificationToken})

    const verifyEmail = {
        to: email,
        subject: "Verify your email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`
    }

    await sendEmail(verifyEmail)

    res.status(201).json({
        email: newUser.email
    })
}

module.exports = register