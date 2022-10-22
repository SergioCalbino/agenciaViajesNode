import express from 'express';
import { paginaDetalleViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from '../controllers/paginasControllers.js';
import { guardarTestimoniales } from '../controllers/testimonialController.js';

const router = express.Router()//Asi utilizamos el Router que nos da express

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales); // Este trae ña vista de las testimoniales
router.post('/testimoniales', guardarTestimoniales); // Para cuando guardan las testimoniales que se ingresan con el input

export default router