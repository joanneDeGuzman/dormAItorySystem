const mongoose = require('mongoose');

const dormSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true },
  capacity: { type: Number, required: true },
  occupied: { type: Number, default: 0, required: false },
  gender: { type: String, enum: ['Male', 'Female'], required: true }, // No default, must be set
  price: { type: Number, required: true },
  electricity: { type: Number, required: true },
  water: { type: Number, required: true },
  amenities: {
    aircon: { type: Boolean, default: false, required: true },
    wifi: { type: Boolean, default: false, required: true },
    bathroom: { type: Boolean, default: false, required: true },
  },
  description: { type: String, default: '' },
  images: { type: [String], default: [] },
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }]
});

module.exports = mongoose.model('Dorm', dormSchema);