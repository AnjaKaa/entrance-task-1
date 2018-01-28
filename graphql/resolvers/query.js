const { models } = require('../../models');

module.exports = {
event (root, { id }) {
    return models.Event.findById(id, {include: { all: true, nested: true}});
  },
  events (root, args, context) {     
    return models.Event.findAll({include: { all: true, nested: true} }, context);
  },
user (root, { id }) {
    return models.User.findById(id);
  },
  users (root, args, context) {
    return models.User.findAll({}, context);
  },
room (root, { id }) {
    return models.Room.findById(id);
  },
  rooms (root, args, context) {
    return models.Room.findAll({  }, context);
  }
};
