const { User } = require("../../models/user")
const { RequestError, sendEmail } = require("../../helpers")


const resendVerifyEmail = async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({email})

    if(!user || user.verify) {
        throw RequestError(404)
    }

    const verifyEmail = {
        to: email,
        subject: "Verify your email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`
    }

    await sendEmail(verifyEmail)

    res.json({
        message: "Verify email resend"
    })
}

module.exports = resendVerifyEmail;