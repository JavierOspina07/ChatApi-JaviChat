const { Router } = require('express')
const { User, Participant } = require('../../models')
const {
  registerUser,
  loginUser,
  validateUserEmail,
  getAllUsers,
  uploadAvatar,
<<<<<<< HEAD
} = require('./user.controllers')
const authenticate = require('../../middlewares/auth.middleware')
const { registerUserValidator, loginValidatior } = require('./user.validators')
const upload = require('../../middlewares/imageUpload.middleware')
const router = Router()

router
  .route('/') // api/v1/users
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser)
  .get(async (req, res, next) => {
    try {
      const result = await User.findAll({
        include: {
          model: Participant,
        },
      })
      res.json(result)
    } catch (error) {
      next(error)
    }
  })
=======
} = require("./user.controllers");
const authenticate = require("../../middlewares/auth.middleware");
const { registerUserValidator, loginValidatior } = require("./user.validators");
const upload = require("../../middlewares/imageUpload.middleware");
const router = Router();

router
  .route("/") // api/v1/users
  .get(authenticate, getAllUsers)
  .post(registerUserValidator, registerUser);

router.put("/:id", authenticate, upload.single("avatar"), uploadAvatar);
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

router.put('/:id', upload.single('avatar'), uploadAvatar)

<<<<<<< HEAD
router.post('/login', loginValidatior, loginUser)
=======
router.post("/validate", validateUserEmail);
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

router.post('/validate', validateUserEmail)

module.exports = router
