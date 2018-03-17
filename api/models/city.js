var mongoose = require( 'mongoose' );
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var citySchema = new mongoose.Schema({
    name : {
        type: String,
        unique: true,
        required: true
    }
});

citySchema.plugin(autoIncrement.plugin, 'City');
mongoose.model('City', citySchema);