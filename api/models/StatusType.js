var mongoose = require( 'mongoose' );
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var statusTypeSchema = new mongoose.Schema({
    type : {
        type: String,
        unique: true,
        required: true
    }
});

statusTypeSchema.plugin(autoIncrement.plugin, 'StatusType');
mongoose.model('StatusType', statusTypeSchema);