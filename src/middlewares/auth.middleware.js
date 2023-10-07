const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticate = (req, res, next) => {
  try {
<<<<<<< HEAD
    console.log(req.headers)
    const authorization = req.headers.authorization
=======
    console.log(req.headers);
    const authorization = req.headers.authorization;
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

    if (!authorization) {
      throw {
        status: 401,
        message: 'No authorization header',
      }
    }
    const token = authorization.split(' ')[1]

    const user = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: 'HS512',
    })
    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authenticate
