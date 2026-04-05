/**
 * Funciones:
 * 1. Control de mensajes "En producción" para botones no funcionales
 * 2. Navegación suave entre secciones
 * 3. Futuras interacciones se añadirán aquí
 */

// DOMContentLoaded = evento que se dispara cuando el HTML está listo
document.addEventListener('DOMContentLoaded', function() {
    
    // CONTROL DEL BOTÓN "DESCARGAR CV"
    // querySelector('.btn-outline') = busca el primer elemento con clase "btn-outline"
    const btnDescargar = document.querySelector('.btn-outline');
    
    // if (btnDescargar) = si el botón existe en la página
    if (btnDescargar) {
        // addEventListener = escucha el evento 'click'
        btnDescargar.addEventListener('click', function(evento) {
            // preventDefault() = evita que el enlace haga su acción por defecto (descargar)
            evento.preventDefault();
            // alert() = muestra un mensaje emergente en el navegador
            alert('🔧 En producción - El CV estará disponible próximamente');
        });
    }
    
    // CONTROL DEL FORMULARIO "ENVIAR MENSAJE"
    // querySelector('.contact-form') = busca el formulario por su clase
    const formulario = document.querySelector('.contact-form');
    
    if (formulario) {
        // Escucha el evento 'submit' (cuando intentan enviar el formulario)
        formulario.addEventListener('submit', function(evento) {
            // Evita que el formulario se envíe (no hay backend)
            evento.preventDefault();
            // Mensaje amigable para el usuario
            alert('🔧 En producción - El formulario no está activo todavía');
            
            // Opcional: Limpiar campos (descomentar si quieres)
            // formulario.reset();
        });
    }
    
    // NAVEGACIÓN SUAVE AL HACER CLIC EN ENLACES INTERNOS
    // Selecciona TODOS los enlaces que empiecen con "#"
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');
    
    // forEach = recorre cada enlace encontrado
    enlacesInternos.forEach(function(enlace) {
        enlace.addEventListener('click', function(evento) {
            // Obtiene el destino (ej: "#sobre-mi") y lo guarda en una variable
            const destinoId = this.getAttribute('href');
            // Si es solo "#" (enlace vacío) o no existe, no hace nada
            if (destinoId === '#' || !destinoId) return;
            // Busca el elemento con ese ID en el documento
            const elementoDestino = document.querySelector(destinoId);
            // Si el elemento existe
            if (elementoDestino) {
                // Evita el comportamiento por defecto (salto brusco)
                evento.preventDefault();
                
                // Scroll suave hacia el elemento destino
                // behavior: 'smooth' = desplazamiento animado
                // block: 'start' = alinea el elemento con la parte superior
                elementoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // MENSAJE EN CONSOLA (para desarrolladores)
    console.log('✅ Portafolio cargado correctamente - Modo "En producción" activo');
});

// FUNCIONES FUTURAS (para cuando el sitio esté completo)

/**
 * Función para activar el formulario (cuando tengas backend)
 * Por ahora está comentada
 */
/*
function activarFormulario() {
    const formulario = document.querySelector('.contact-form');
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            // Aquí iría la lógica real de envío
            console.log('Formulario enviado correctamente');
        });
    }
}
*/

/**
 * Función para activar descarga de CV (cuando tengas el archivo)
 */
/*
function activarDescargaCV() {
    const btnCV = document.querySelector('.btn-outline');
    if (btnCV) {
        btnCV.removeEventListener('click', mostrarMensajeProduccion);
        // Aquí va la lógica real de descarga
    }
}
*/