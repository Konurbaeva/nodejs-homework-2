const sgMail = require("@sendgrid/mail")
require("dotenv").config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

// const data = {
//     to:"katay89246@minterp.com",
//     subject:"Verify email",
//     html:`<p>Verify email</p>`
// }

const sendEmail = async(data) => {
    const email = {...data, from: "s0539451@htw-berlin.de"}

    await sgMail.send(email)
    return true;
}

module.exports = sendEmail;