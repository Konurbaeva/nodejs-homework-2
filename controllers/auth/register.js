const { User } = require("../../models/user")

const { RequestError } = require("../../helpers")

const register = async(req, res) => {
    const { email } = req.body;

   console.log(req.body.email)
   console.log(req.body.name)

    const user = await User.findOne({email})

    if(user){
        throw RequestError(409, "Email in use")
    }

    const newUser = await User.create(req.body)

    res.status(201).json({
        name: newUser.name,
        email: newUser.email
    })

}

module.exports = register