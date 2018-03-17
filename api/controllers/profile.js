var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function (req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function (err, user) {
        res.status(200).json(user);
      });
  }

};

module.exports.getUsers = function (req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .find()
      .exec(function (err, users) {
        res.status(200).json(users);
      });
  }

}

module.exports.updateUser = function (req, res) {

  if (!req.body._id) {
    console.log(req.body);
    console.log("error");
    return;
  }

  var user = {};

  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.location = req.body.location;
  user.status = req.body.status;
  user.access = req.body.access;

  var conditions = { _id: req.body._id }
    , update = { $set: user }
    , options = { multi: true };

  User.update(conditions, update, options, callback);

  function callback(err, numAffected) {
    if(err) console.log(err);
    console.log("user updated: " + numAffected.n);
    res.status(200).json(numAffected);
  }

}
