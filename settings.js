require('dotenv').config()
module.exports = {
    // Enter your Hoichoi Credentials

    email: process.env.MAIL,
    password: process.env.PASS,

    // Enter here any random alphabet string
    randomString: process.env.STRING
}
