const db = require("../models");

module.exports = {
    findAllMembers: function(req, res) {
        db.Members
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    createNewMember: function (req, res) {
        db.Members
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}