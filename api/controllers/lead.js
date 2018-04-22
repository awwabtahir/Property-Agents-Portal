var mongoose = require('mongoose');
var Lead = mongoose.model('Lead');
var Inventory = mongoose.model('Inventory');

module.exports.addLead = function (req, res) {

    if (!req.body.purpose) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var inventory = new Inventory();
    inventory.purpose = req.body.purpose;
    inventory.cityId = req.body.cityId;
    inventory.locationId = req.body.locationId;
    inventory.sublocationId = req.body.sublocationId;
    inventory.propTypeId = req.body.propTypeId;
    inventory.propNumber = req.body.propNumber;
    inventory.street = req.body.street;
    inventory.demand = req.body.demand;
    inventory.area = req.body.area;
    inventory.areaUnit = req.body.areaUnit;
    inventory.beds = req.body.beds;
    inventory.leadId = 0;

    var lead = new Lead();

    lead.clientName = req.body.clientName;
    lead.clientType = req.body.clientType;
    lead.phoneNumber = req.body.phoneNumber;
    lead.assignedTo = req.body.assignedTo;
    lead.leadAdminStatus = req.body.leadAdminStatus;
    lead.leadAgentStatus = req.body.leadAgentStatus;
    lead.cmt = req.body.cmt;
    lead.inventoryId = 0;

    lead.save(function (err, l) {
        inventory.save(function (errr, inv) {
            l.inventoryId = inv._id;
            inv.leadId = l._id;
            l.save();
            inv.save();
            res.status(200);
            res.json({
                "message": "success"
            });
        });
    });


}

module.exports.getLeads = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        if (req.query.user_id) {
            Lead
                .find({ assignedTo: req.query.user_id })
                .exec(function (err, leads) {
                    res.status(200).json(leads);
                });
        } else {
            Lead
                .find()
                .exec(function (err, leads) {
                    res.status(200).json(leads);
                });
        }
    }
}

module.exports.getInventories = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        Inventory
            .find()
            .exec(function (err, inventories) {
                res.status(200).json(inventories);
            });
    }
}

module.exports.updateLead = function (req, res) {

    if (!req.body.purpose) {
        console.log(req.body);
        console.log("error");
        return;
    }

    var inventory = {};

    inventory.purpose = req.body.purpose;
    inventory.cityId = req.body.cityId;
    inventory.locationId = req.body.locationId;
    inventory.sublocationId = req.body.sublocationId;
    inventory.propTypeId = req.body.propTypeId;
    inventory.propNumber = req.body.propNumber;
    inventory.street = req.body.street;
    inventory.demand = req.body.demand;
    inventory.area = req.body.area;
    inventory.areaUnit = req.body.areaUnit;
    inventory.beds = req.body.beds;
    inventory.leadId = req.body.leadId;

    var lead = {};

    lead.clientName = req.body.clientName;
    lead.clientType = req.body.clientType;
    lead.phoneNumber = req.body.phoneNumber;
    lead.assignedTo = req.body.assignedTo;
    lead.inventoryId = req.body.inventoryId;
    lead.leadAdminStatus = req.body.leadAdminStatus;
    lead.leadAgentStatus = req.body.leadAgentStatus;
    lead.cmt = req.body.cmt;

    console.log(lead);
    console.log(inventory);

    var conditions = { _id: req.body.leadId }
        , update = { $set: lead }
        , options = { multi: true };

    Lead.update(conditions, update, options, callback);

    function callback(err, numAffected) {
        if (err) console.log(err);
        console.log("lead updated: " + numAffected.n);
        var conditions = { _id: req.body.inventoryId }
            , update = { $set: inventory }
            , options = { multi: true };

        Inventory.update(conditions, update, options, callback1);

        function callback1(err, numAffected) {
            console.log("inventory updated: " + numAffected.n);
            res.status(200).json(numAffected);
        }
    };



}