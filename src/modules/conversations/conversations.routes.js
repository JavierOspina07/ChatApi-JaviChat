<<<<<<< HEAD
const { Router } = require('express')
=======
const { Router } = require("express");
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653
const {
  createConversation,
  createGroupConversation,
  getAllConversations,
<<<<<<< HEAD
} = require('./conversations.controllers')
const authenticate = require('../../middlewares/auth.middleware')

const router = Router()
=======
} = require("./conversations.controllers");
const authenticate = require("../../middlewares/auth.middleware");

const router = Router();
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

// crear conversaciones
// crear conversaciones grupales
// obtener todas las conversaciones
// obtener una conversacion con todos los mensajes

<<<<<<< HEAD
router.post('/', authenticate, createConversation)
router.post('/group', authenticate, createGroupConversation)

router.get('/:id', authenticate, getAllConversations)

module.exports = router
=======
router.post("/", authenticate, createConversation);
router.post("/group", authenticate, createGroupConversation);

router.get("/:id", authenticate, getAllConversations);

module.exports = router;
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653
