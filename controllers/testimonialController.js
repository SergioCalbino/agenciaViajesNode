import { Testimonial } from "../models/Testimoniales.js";


const guardarTestimoniales = async (req, res) => {

    //Validar los campos del formulario
    const { nombre, correo, mensaje } = req.body;
    
    const errores = [];
    
    if (nombre.trim() === '') {
        errores.push({mensaje: 'El Nombre esta vacio'})
    }
    if (correo.trim() === '') {
       errores.push({mensaje: 'El Correo esta vacio'})
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El Mensaje esta vacio'})
    }

    if(errores.length > 0) {

        //Consultar testimoniales existentes 
        const testimoniales = await Testimonial.findAll();

        //mostar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //Almacenar las testimoniales en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales');
            
        } catch (error) {
            console.log(error)
            
        }
    }
    
}

export {
    guardarTestimoniales
}