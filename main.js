function soundPlay(idElementAudio){
   
    const elemento = document.querySelector(idElementAudio);
    
    if(elemento != null && elemento.localName === 'audio'){
       elemento.play();
    }
}
const listTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador  < listTeclas.length; contador ++){
    
    const tecla = listTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        soundPlay(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
          tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
