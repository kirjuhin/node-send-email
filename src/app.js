const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

const { isEmail } = require('validator')

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/send', (req, res) => {
    const data = req.body
    
    if (!isEmail(data.email)) {
        return res.status(400).send({ error: 'Please provide a valid email.' })
    }

    sgMail.send({
        to: process.env.SENDGRID_CONTACT_TO,
        from: process.env.SENDGRID_CONTACT_FROM,
        subject: 'Contact form submit',
        text: `Email: ${data.email}\nName: ${data.name}\nMessage: ${data.message}`
    })
    res.send({ message: 'Thank you for your message, I will be in touch soon!' });
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}`)
})