var mongoose = require( 'mongoose' );
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var locationSchema = new mongoose.Schema({
    cityId : {
      type: Number,
      default: 0,
      required: true  
    },
    location : {
        type: String,
        unique: true,
        required: true
    }
});

locationSchema.plugin(autoIncrement.plugin, 'Location');
mongoose.model('Location', locationSchema);