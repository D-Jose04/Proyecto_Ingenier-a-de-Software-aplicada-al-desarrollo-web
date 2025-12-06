const express = require('express');
const app = express();
const port = 3000;

// IMPORTANTE: Esto le dice al servidor que busque archivos en la carpeta "public"
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});