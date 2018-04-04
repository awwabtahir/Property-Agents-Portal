var mongoose = require('mongoose');
var Lead = mongoose.model('Lead');

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

// For status type operations
var StatusType = mongoose.model('StatusType');

module.exports.addStatusType = function (req, res) {

    if (!req.body.type) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var statusType = new StatusType();

    statusType.type = req.body.type;

    statusType.save(function (err) {
        res.status(200);
        res.json({
            "message" : "success"
          });
    });    

}

module.exports.getStatusTypes = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        StatusType
            .find()
            .exec(function (err, statusTypes) {
                res.status(200).json(statusTypes);
            });
    }
}

module.exports.updateStatus = function (req, res) {

    if (!req.body) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var status = {};
    var lead = {};

    status.isAdmin = req.body.isAdmin;

    if(status.isAdmin === true) {
        lead.leadAdminStatus = parseInt(req.body.sid);
    } else {
        lead.leadAgentStatus = parseInt(req.body.sid);
    }

    var conditions = { _id: req.body.lid }
        , update = { $set: lead }
        , options = { multi: true };

    Lead.update(conditions, update, options, callback);

    function callback(err, numAffected) {
        if (err) console.log(err);
        console.log("lead updated: " + numAffected.n);
        res.status(200).json(numAffected);
    };

}