const { Schema, model } = require("mongoose")
const Joi = require("Joi")

const { RequestError } = require("../helpers")

const userSchema = new Schema({
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    }
    // ,
    // subscription: {
    //   type: String,
    //   enum: ["starter", "pro", "business"],
    //   default: "starter"
    // },
    // token: {
    //   type: String,
    //   default: null,
    // },
  }, {versionKey: false, timestamps: true})

  userSchema.post("save", RequestError)

  const registerSchema = Joi.object({
    name: Joi.string().required(),
    email:Joi.string().required(),
    password: Joi.string().min(6).required()
  })

  const loginSchema = Joi.object({
    email:Joi.string().required(),
    password: Joi.string().min(6).required()
  })

  const schemas = {
    registerSchema,
    loginSchema
  }

const User = model("user", userSchema)


module.exports = {
    User,
    schemas
}