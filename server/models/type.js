/**
 * Type Schema
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldset = {
    name : {
        type: String,
        unique: true,
        required: true
    },
    _subtypes: [{
        type: Schema.Types.ObjectId,
        ref: 'Subtype',
        required: true
    }]
}

const TypeSchema = new Schema(fieldset);

 /**
 * Select item by id.
 *
 * Uses findOne() method.
 *
 * @static
 * @param {String} id
 * @param {Function} cb
 */
TypeSchema.statics.findOneById = function (id, cb) {
    this.findOne({_id: id}).exec(cb);
};

// Duplicate the ID field.
TypeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TypeSchema.set('toJSON', {
  virtuals: true
});


 module.exports = mongoose.model('Type', TypeSchema);