const { User } = require("../../models/user")

const { RequestError } = require("../../helpers")

const bcrypt = require("bcrypt")

const login = async(req, res) => {
    const { email, password} = req.body

    const user = await User.findOne({email})

    if(!user){
        throw RequestError(401, "Email or password invalid")
    }

    const passwordCompare = await bcrypt.compare(password, user.password)

    if(!passwordCompare){
        throw RequestError(401, "Password invalid")
    }

    const token = "123.jdjsjsjsjusjs"

    res.json({
        token,
    })
}

module.exports = login