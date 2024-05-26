const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Datos de ejemplo para la API
let usuarios = [
    { id: 1, nombre: 'Usuario 1' },
    { id: 2, nombre: 'Usuario 2' },
    { id: 3, nombre: 'Usuario 3' }
];

// Ruta para obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

// Ruta para obtener un usuario por su ID
app.get('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(user => user.id === id);
    if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
});

// Ruta para agregar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).json({ mensaje: 'El nombre del usuario es requerido' });
    }
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre
    };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
