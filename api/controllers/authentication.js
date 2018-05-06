var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.city = req.body.city;
  user.location = req.body.location;
  user.status = req.body.status;
  user.access = req.body.access;
  user.cityManager = req.body.cityManager;

  user.setPassword(req.body.password);

  user.save(function(err) {
    res.status(200);
    res.json({
      "message" : "success"
    });
  });

};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      access = user.access;
      id = '' + user._id;
      location = '' + user.city;
      cityManager = user.cityManager;
      res.status(200);
      res.json({
        "token" : token,
        "access" : access,
        "id": id,
        "location" : location,
        "cityManager" : cityManager
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};