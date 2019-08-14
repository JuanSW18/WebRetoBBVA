function validar() {
    let mensaje = $('#info_mensaje');
    let dni = $('#i_dni').val();
    if(dni === ''){
        mensaje.text("Ingrese DNI!");
        mensaje.attr('hidden', false);
    }else{
        if(dni.length < 8 || dni.length > 8){
            mensaje.text("El DNI debe tener 8 digitos!");
            mensaje.attr('hidden', false); 
        }else{
            window.location.replace("inicio.html");
        }
    }
}

function ocultar_mensaje() {
    let mensaje = $('#info_mensaje');
    setTimeout(function(){mensaje.attr('hidden', true); }, 1000);
}

/**By: Dhaval Thakkar (dhavalt10) */
function init(){
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
}

function showDetail(element) {
    let padre = $(element).parent();
    let div = padre.siblings("div");
    div.slideToggle("slow");
    //$(element).addClass("activate");
}