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
      }
   })


const Contact = model("contacts", contactSchema)

module.exports = Contact;


// {
//     name: {
//       type: String,
//       required: [true, 'Set name for contact'],
//     },
//     email: {
//       type: String,
//     },
//     phone: {
//       type: String,
//     },
//     favorite: {
//       type: Boolean,
//       default: false,
//     },
//   }