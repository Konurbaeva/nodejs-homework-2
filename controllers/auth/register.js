const { User } = require("../../models/user")

const { RequestError } = require("../../helpers")

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
    const newUser = await User.create({...req.body, password:hashPassword, avatarURL})

    res.status(201).json({
        email: newUser.email
    })

}

module.exports = register