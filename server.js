const express = require('express');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const helmet = require('helmet'); // Importar Helmet middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Crea una instancia de protección CSRF
const csrfProtection = csurf({ cookie: true });

// Middleware
app.use(helmet());  // Agregar Helmet middleware antes de otros middlewares
app.use(csrfProtection);
app.use(bodyParser.json());

// ... resto del código (datos, rutas, etc.)

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
