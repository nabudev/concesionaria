const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    features: [String],
    imageUrl: { type: String, required: false },
}, {
    timestamps: true // Esto añade los campos createdAt y updatedAt
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
