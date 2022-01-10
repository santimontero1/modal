const fotos = [...document.querySelectorAll('.foto')]
const btn_izq = document.getElementById('boton_izq');
const btn_der = document.getElementById('boton_der');
const foto_principal = document.getElementById('foto_principal')

function modal(tipo) {
    const modal_contenedor = document.getElementById('modal_contenedor_'+tipo) ; 
    const btn_modal = document.getElementById('boton_modal_'+tipo);
    const btn_cerrar = document.getElementById('cerrar_'+tipo);
    const modal = document.getElementById('modal_'+tipo);

    function abrir_modal (e) {
        e.preventDefault();
        modal_contenedor.style.opacity = 1 ; 
        modal_contenedor.style.visibility = "visible" ;
        modal.classList.toggle('modal_cerrar');
    }

    function cerrar_modal () {
        modal.classList.toggle('modal_cerrar');
        setTimeout(()=> {
            modal_contenedor.style.opacity = 0 ; 
            modal_contenedor.style.visibility = "hidden" ;
        }, 850)
    }

    btn_modal.addEventListener('click', abrir_modal);

    btn_cerrar.addEventListener('click', cerrar_modal);

    window.addEventListener('click', function(e){
        if(e.target == modal_contenedor) cerrar_modal()
    })
    window.addEventListener('keyup', function(e){
        if(e.key == 'Escape') cerrar_modal()
    })
}


let contador = 0

const cargar_foto_principal = () => {
    const fotos = [...document.querySelectorAll('.foto')]
    console.log(contador)
    if(contador < 0) {
        contador = 3
    }else if (contador == 4){ 
        contador = 0
    }
    foto_principal.src = fotos[contador].src
}
const mover_izq = () => {
    contador --
    cargar_foto_principal()
}
const mover_der = () => {
    contador ++
    cargar_foto_principal()
}
cargar_foto_principal()
// modal('prueba')
modal('fotos')


btn_izq.addEventListener('click', mover_izq);
btn_der.addEventListener('click', mover_der)
