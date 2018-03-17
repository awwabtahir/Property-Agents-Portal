var mongoose = require('mongoose');

// For city operations
var City = mongoose.model('City');

module.exports.addCity = function (req, res) {

    if (!req.body.name) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var city = new City();

    city.name = req.body.name;

    city.save(function (err) {
        res.status(200);
        res.json({
            "message" : "success"
          });
    });

}

module.exports.getCities = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        City
            .find()
            .exec(function (err, cities) {
                res.status(200).json(cities);
            });
    }
}

// For location operations
var Location = mongoose.model('Location');

module.exports.addLoc = function (req, res) {

    if (!req.body.cityId) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var loc = new Location();

    loc.cityId = req.body.cityId;
    loc.location = req.body.location;

    loc.save(function (err) {
        res.status(200);
        res.json({
            "message" : "success"
          });
    });

}

module.exports.getLocations = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        Location
            .find()
            .exec(function (err, locs) {
                res.status(200).json(locs);
            });
    }
}

// For property type operations
var PropertyType = mongoose.model('PropertyType');

module.exports.addPropType = function (req, res) {

    if (!req.body.type) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var propType = new PropertyType();

    propType.type = req.body.type;

    propType.save(function (err) {
        res.status(200);
        res.json({
            "message" : "success"
          });
    });    

}

module.exports.getPropTypes = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        PropertyType
            .find()
            .exec(function (err, propTypes) {
                res.status(200).json(propTypes);
            });
    }
}