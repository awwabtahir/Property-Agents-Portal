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
            "message": "success"
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
var SubLocation = mongoose.model('SubLocation');

module.exports.addLoc = function (req, res) {

    if (!req.body.cityId) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var loc = new Location();
    var sloc = new SubLocation();

    loc.cityId = req.body.cityId;
    loc.location = req.body.location;

    if (req.body.sublocation !== '') {
        sloc.sublocation = req.body.sublocation;
        sloc.locationId = 0;
    }

    loc.save(function (err, l) {
        if (err) {
            Location
                .findOne({ 'location': req.body.location })
                .exec(function (err, loc) {
                    sloc.save(function (errr, sl) {
                        if(errr) {
                            console.log(errr);
                            return; 
                        }
                        sl.locationId = loc._id;
                        sl.save();
                        res.status(200);
                        res.json({
                            "message": "success"
                        });
                    });
                });
        } else {
            if (req.body.sublocation !== '') {
                sloc.save(function (errr, sl) {
                    sl.locationId = l._id;
                    l.save();
                    sl.save();
                    res.status(200);
                    res.json({
                        "message": "success"
                    });
                });
            } else {
                l.save();
                res.status(200);
                res.json({
                    "message": "success"
                });
            }
        }
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

module.exports.getSubLocations = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        SubLocation
            .find()
            .exec(function (err, slocs) {
                res.status(200).json(slocs);
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
            "message": "success"
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
            "message": "success"
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

    if (status.isAdmin === true) {
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