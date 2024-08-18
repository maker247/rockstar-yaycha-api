const jwt = require("jsonwebtoken")

const secret = "P@ssw0rd"

const data = {
    name: "koko",
    gender: "male"
}

const token = jwt.sign(data, secret)

console.log(token)

const decode = jwt.verify(token, secret)

console.log(decode)