const db = require("../models");

module.exports = {
    findAllRequests: function(req, res) {
        db.Requests
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },

    createNewRequest: function (req, res) {
        db.Requests
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}