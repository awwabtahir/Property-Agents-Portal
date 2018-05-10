var mongoose = require( 'mongoose' );
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var sublocationSchema = new mongoose.Schema({
    locationId : {
      type: Number,
      default: 0,
      required: true  
    },
    sublocation : {
        type: String,
        required: true
    }
});

sublocationSchema.plugin(autoIncrement.plugin, 'SubLocation');
mongoose.model('SubLocation', sublocationSchema);