/**
 * Request Schema
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fieldset = {
    name : {
        type: String,
        required: true
    },
    surnames : {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    birthDate: {
        type: Date
    },
    genre: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    _type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    _subtype : {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    }
}

const RequestSchema = new Schema(fieldset);

// Duplicate the ID field.
RequestSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
RequestSchema.set('toJSON', {
  virtuals: true
});


 module.exports = mongoose.model('Request', RequestSchema);