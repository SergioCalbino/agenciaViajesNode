//const express = require('express');

import express from 'express'; // Agregar al package. json el type module para usar esta sintaxis
import db from './config/db.js';
import router from './routes/index.js';


const app = express();

//conectar la base de datos
db.authenticate()
  .then( () => console.log('Base de datos conectada') )
  .catch( error => console.log(error) )

//Definir puerto 
const port = process.env.PORT || 4000;

//habilitar pug

app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) => {
     const year = new Date()

   res.locals.actualYear = year.getFullYear(); // Como definir una variable dentro de express
   res.locals.nombreSitio = "Agencia de Viajes"; 
   next();


})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica

app.use(express.static('public'));

//Agregar Router
app.use('/', router); //Esto lo que hace es agregar desde la pagina pricipal el touter y todas las rutas que definamos

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});