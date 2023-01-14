const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const mongoose = require("mongoose")

require("dotenv").config()

const { DB_HOST } = process.env

console.log(process.env)

mongoose.connect(DB_HOST)
.then(() => console.log("database connect success"))
.catch(error => console.log(error.message))


const authRouter = require("./routes/api/auth")
const contactsRouter = require('./routes/api/contacts')
const { listContacts } = require('./models/contacts')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())


app.use('/api/auth', authRouter)
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.get('/api/contacts', (req, res) => {
  console.log(res.json(listContacts('./models/contact.json')))
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
