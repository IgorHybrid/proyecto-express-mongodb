/**
 * Subtype Schema
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldset = {
    name : {
        type: String,
        unique: true,
        required: true
    }
}

const SubtypeSchema = new Schema(fieldset);

 /**
 * Select item by id.
 *
 * Uses findOne() method.
 *
 * @static
 * @param {String} id
 * @param {Function} cb
 */
SubtypeSchema.statics.findOneById = function (id, cb) {
    this.findOne({_id: id}).exec(cb);
};

// Duplicate the ID field.
SubtypeSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
SubtypeSchema.set('toJSON', {
  virtuals: true
});


 module.exports = mongoose.model('Subtype', SubtypeSchema);