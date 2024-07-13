let numeroSecreto = 0;
let intentos = 0;
let listaNumeros= [];
let numeroMaximo = 10;
function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return ;
    
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (numeroSecreto);
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p',`acertastes el numero en ${intentos} ${intentos===1?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroSecreto<numeroDeUsuario){
            asignarTextoElemento('p','el numero es menor');
        }
        else {
            asignarTextoElemento('p','el numero es mayor');
    }
    intentos ++;
    limpiarCaja ();
    //alert ('cliquez sur le bouton');
    }
    return;

}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}
function condicionesIniciales (){
    asignarTextoElemento ('h1','JOUEU DE NUMÉRO SECRÉTE');
    asignarTextoElemento ('p',`insérez le numéro secréte de 1 á ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos= 1;
}
function reiniciarJuego() {
    limpiarCaja ();
    condicionesIniciales ();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (listaNumeros);
    console.log (numeroGenerado);
    if (listaNumeros.length == numeroMaximo){
        asignarTextoElemento ('p','Tous les numéros ont déjà été tirés au sort.');
    }
    else {
    if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

condicionesIniciales ();