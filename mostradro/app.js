const foto_principal = document.getElementById('foto_principal')
const foto_principal2 = document.getElementById('foto_principal2')
const cotenedor_foto_principal = document.getElementById('contenedor_foto_principal')
const contenedor_fotos = document.querySelectorAll('.contenedor_fotos')
const btn_izq = document.getElementById('boton_izq');
const btn_der = document.getElementById('boton_der');
const btn_modal_izq = document.getElementById('boton_modal_izq');
const btn_modal_der = document.getElementById('boton_modal_der');
const fotos = [...document.querySelectorAll('.foto')]



for(let i = 0 ; i < fotos.length ; i++){
    fotos[i].addEventListener('click', function(){
        foto_principal.src = fotos[i].src
        foto_principal2.src = fotos[i].src
        // foto_principal_zoom.src =  fotos[i].src 
    })
}

let contador = 0

const cargar_foto_principal = () => {
    const fotos = [...document.querySelectorAll('.foto')]
    if(contador < 0) {
        contador = 3
    }else if (contador == 4){ 
        contador = 0
    }
    foto_principal.src = fotos[contador].src
    foto_principal2.src = fotos[contador].src
}
const mover_izq = () => {
    contador --
    cargar_foto_principal()
}
const mover_der = () => {
    contador ++
    cargar_foto_principal()
}
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
}

cargar_foto_principal()
modal('fotos')
btn_modal_izq.addEventListener('click', mover_izq);
btn_modal_der.addEventListener('click', mover_der)
btn_izq.addEventListener('click', mover_izq);
btn_der.addEventListener('click', mover_der)
