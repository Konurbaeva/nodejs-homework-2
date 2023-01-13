const { Schema, model } = require("mongoose")

// const contactSchema = new Schema({
//  name: String,
//  email:String,
//  phone: String,
// })

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true
      },
     phone: {
        type: String,
        required: true
      },
      favorite: {
      type: Boolean,
      default: false,
    },
   })


const Contact = model("contacts", contactSchema)

module.exports = Contact;