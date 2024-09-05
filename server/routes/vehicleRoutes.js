const express = require('express');
const Vehicle = require('../models/vehicle');
const router = express.Router();

// Crear un vehículo (POST)
router.post('/', async (req, res) => {
    try {
        const { name, description, price, features, imageUrl } = req.body;
        const newVehicle = new Vehicle({ name, description, price, features, imageUrl });
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el vehículo', error });
    }
});

// Obtener todos los vehículos (GET)
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los vehículos', error });
    }
});

// Obtener un vehículo por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) return res.status(404).json({ message: 'Vehículo no encontrado' });
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el vehículo', error });
    }
});

// Actualizar un vehículo (PUT)
router.put('/:id', async (req, res) => {
    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Devuelve el documento actualizado
        );
        if (!updatedVehicle) return res.status(404).json({ message: 'Vehículo no encontrado' });
        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el vehículo', error });
    }
});

// Eliminar un vehículo (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (!deletedVehicle) return res.status(404).json({ message: 'Vehículo no encontrado' });
        res.status(200).json({ message: 'Vehículo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el vehículo', error });
    }
});

module.exports = router;
