const { Schema, model } = require("mongoose")

const { RequestError } = require("../helpers")

const contactSchema = new Schema({
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    }
   })

contactSchema.post("save", RequestError)

const Contact = model("contacts", contactSchema)

module.exports = Contact;