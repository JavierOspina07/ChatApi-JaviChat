<<<<<<< HEAD
const { Conversation, User, Participant } = require('../../models')

const createConversation = async (req, res, next) => {
  try {
    const { userId, participantId } = req.body
    // creo la conversación
    const conversation = await Conversation.create({ createdBy: userId })
    // agregar a los participantes a la conversacion --> creandolos en la tabla pivote
    const user = await User.findByPk(userId)
    const participant = await User.findByPk(participantId)
    await conversation.addUser(user)
    await conversation.addUser(participant)
    res.status(201).end()
  } catch (error) {
    next(error)
  }
}
=======
const { Conversation, User, Participant } = require("../../models");

const createConversation = async (req, res, next) => {
  try {
    const { userId, participantId } = req.body;
    // creo la conversación
    const conversation = await Conversation.create({ createdBy: userId });
    // agregar a los participantes a la conversacion --> creandolos en la tabla pivote
    const user = await User.findByPk(userId);
    const participant = await User.findByPk(participantId);
    await conversation.addUser(user);
    await conversation.addUser(participant);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

const createGroupConversation = async (req, res, next) => {
  try {
    // ? cuantos participantes se van a enviar cuando se crea el grupo
<<<<<<< HEAD
    const { userId, participantsIds, title } = req.body
    const conversation = await Conversation.create({
      createdBy: userId,
      title,
      type: 'group',
    })
    // necesitamos crear a los participantes en la tabla pivote
    // {UserId, ConversationId}
    // agreagar al UserId dentro del arreglo de participantsIds
    const createParticipants = [...participantsIds, userId].map(participant => ({
      ConversationId: conversation.id,
      UserId: participant,
    }))

    await Participant.bulkCreate(createParticipants)
    res.status(201).end()
  } catch (error) {
    next(error)
  }
}

const getAllConversations = async (req, res, next) => {
  try {
    const { id } = req.params
=======
    const { userId, participantsIds, title } = req.body;
    const conversation = await Conversation.create({
      createdBy: userId,
      title,
      type: "group",
    });
    // necesitamos crear a los participantes en la tabla pivote
    // {UserId, ConversationId}
    // agreagar al UserId dentro del arreglo de participantsIds
    const createParticipants = [...participantsIds, userId].map(
      (participant) => ({
        ConversationId: conversation.id,
        UserId: participant,
      })
    );

    await Participant.bulkCreate(createParticipants);
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};

const getAllConversations = async (req, res, next) => {
  try {
    const { id } = req.params;
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

    const conversations = await Participant.findAll({
      where: { UserId: id },
      include: {
        model: Conversation,
        include: {
          model: Participant,
<<<<<<< HEAD
          attributes: ['UserId'],
          include: {
            model: User,
            attributes: ['firstname', 'lastname', 'avatar'],
          },
        },
      },
    })
    res.json(conversations)
  } catch (error) {
    next(error)
  }
}
=======
          attributes: ["UserId"],
          include: {
            model: User,
            attributes: ["firstname", "lastname", "avatar"],
          },
        },
      },
    });
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

module.exports = {
  createConversation,
  createGroupConversation,
  getAllConversations,
<<<<<<< HEAD
}
=======
};
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653
