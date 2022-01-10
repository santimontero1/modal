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

modal('prueba')
