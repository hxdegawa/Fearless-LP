const express = require('express')
const validator = require('validator')
const xssFilters = require('xss-filters')
const mailer = require('nodemailer-promise')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const rejectFunctions = new Map([
  ['name', (v) => v.length < 1],
  ['email', (v) => !validator.isEmail(v)],
  ['message', (v) => v.length < 10]
])

const validateAndSanitize = (key, value) => {
  return (
    rejectFunctions.has(key) &&
    !rejectFunctions.get(key)(value) &&
    xssFilters.inHTMLData(value)
  )
}

const sendMail = (email, message, name, res) => {
  const sendEmail = mailer.config({
    service: 'Gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS
    }
  })

  const mailInfo = {
    from: email,
    to: [process.env.TARGET_EMAIL],
    subject: `New contact from ${name}`,
    text: `name: ${name}\nemail: ${email}\nmessage: ${message}`
  }

  sendEmail(mailInfo)
    .then(() => {
      res.status(200).redirect('/?status=success')
    })
    .catch((err) => {
      res.status(200).redirect('/?status=error')
      console.error(err)
    })
}

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.redirect('/')
})

app.post('/', (req, res) => {
  const attributes = ['email', 'message', 'name']

  console.log(req.body)

  const sanitizedAttributes = attributes.map((n) =>
    validateAndSanitize(n, req.body[n])
  )

  const someInvalid = sanitizedAttributes.some((r) => !r)

  if (someInvalid) {
    return res.status(422).json({ error: '送信中にエラーが発生しました お手数ですが info@fearlessf.com にメールで直接お問い合わせください' })
  }

  sendMail(...sanitizedAttributes, res)
})

module.exports = {
  path: '/api/contact',
  handler: app
}
