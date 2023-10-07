'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      Conversation.hasMany(models.Message, { foreignKey: 'conversationId' })
      Conversation.belongsTo(models.User, { foreignKey: 'createdBy' })
      Conversation.belongsToMany(models.User, { through: 'Participant' })
      Conversation.hasMany(models.Participant, {
        foreignKey: 'ConversationId',
      })
=======
      Conversation.hasMany(models.Message, { foreignKey: "conversationId" });
      Conversation.belongsTo(models.User, { foreignKey: "createdBy" });
      Conversation.belongsToMany(models.User, { through: "Participant" });
      Conversation.hasMany(models.Participant, {
        foreignKey: "ConversationId",
      });
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653
    }
  }
  Conversation.init(
    {
      title: DataTypes.STRING,
      conversationImage: DataTypes.STRING,
      type: DataTypes.ENUM('single', 'group'),
      createdBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Conversation',
      timestamps: true,
      updatedAt: false,
    }
  )
  return Conversation
}
