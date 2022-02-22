const { JWT_SECRET } = require("../secrets") // use this secret!
const jwt = require("jsonwebtoken")

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    role_name: user.role_name,
    username: user.username,
  }
  const options = {
    expiresIn: "1d",
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = buildToken
