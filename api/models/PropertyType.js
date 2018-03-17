var mongoose = require( 'mongoose' );
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var propertyTypeSchema = new mongoose.Schema({
    type : {
        type: String,
        unique: true,
        required: true
    }
});

propertyTypeSchema.plugin(autoIncrement.plugin, 'PropertyType');
mongoose.model('PropertyType', propertyTypeSchema);