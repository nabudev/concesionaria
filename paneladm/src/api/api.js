import axios from 'axios';

const API_URL = 'http://localhost:5000/api/vehicles'; // Cambia esto por la URL de tu servidor en producción

// Obtener todos los vehículos
export const getAllVehicles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
};

// Obtener un vehículo por ID
export const getVehicleById = async (vehicleId) => {
  try {
    const response = await axios.get(`${API_URL}/${vehicleId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    throw error;
  }
};

// Crear un vehículo
export const createVehicle = async (vehicleData) => {
  try {
    const response = await axios.post(API_URL, vehicleData);
    return response.data;
  } catch (error) {
    console.error('Error creating vehicle:', error);
    throw error;
  }
};

// Actualizar un vehículo
export const updateVehicle = async (vehicleId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${vehicleId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating vehicle:', error);
    throw error;
  }
};

// Eliminar un vehículo
export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await axios.delete(`${API_URL}/${vehicleId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    throw error;
  }
};

