require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
var cors = require('cors')
app.use(cors()) 

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.log('Error conectando a MongoDB:', error));

// Rutas
app.use('/api/vehicles', vehicleRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
