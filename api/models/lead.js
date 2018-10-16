var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var leadSchema = new mongoose.Schema({
    clientName: {
        type: String
    },
    clientType: {
        type: Number
    },
    phoneNumber: {
        type: String
    },
    assignedTo: {
        type: String,
        default: 0
    },
    leadAdminStatus: {
        type: Number
    },
    leadAgentStatus: {
        type: Number
    },
    inventoryId: {
        type: Number
    },
    cmt: {
        type: String
    },
    isInventory: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now,
        required : true
    }
});

var inventorySchema = new mongoose.Schema({
    purpose: {
        type: Number,
        required: true,
        default: 1
    },
    cityId: {
        type: Number
    },
    locationId: {
        type: Number
    },
    sublocationId: {
        type: Number
    },
    propTypeId: {
        type: Number
    },
    propNumber: {
        type: String
    },
    street: {
        type: String
    },
    demand: {
        type: Number
    },
    area: {
        type: String
    },
    areaUnit: {
        type: Number
    },
    beds: {
        type: Number
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    leadId: {
        type: Number
    }
});

inventorySchema.plugin(autoIncrement.plugin, 'Inventory');
leadSchema.plugin(autoIncrement.plugin, 'Lead');

mongoose.model('Inventory', inventorySchema);
mongoose.model('Lead', leadSchema);