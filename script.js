
function velocidade(){
    let vel = document.getElementById("velocidad");
    let temp = document.getElementById("tempo");
    let esp = document.getElementById("espaco");
    let resultado = document.getElementById("res");

    let velo = Number(vel.value);
    let tempo = Number(temp.value);
    let espa = Number(esp.value);

    if(velo == 0){
        alert(`Sua velocidade é ${velo = espa/tempo} Km/Hr`);
    } else if ( tempo == 0){
        alert(`O tempo para percorrer a distancia de ${espa} KM foi de ${tempo = espa / velo} horas`);
    } else if(espa == 0){
        alert(`A distancia percorrida foi de ${espa = velo * tempo} Km`);
    } 
    
}


function pitagorar(){
    let vel = document.getElementById("velocidad");
    let temp = document.getElementById("tempo");
    let esp = document.getElementById("espaco");
    let resultado = document.getElementById("res");

    let velo = Number(vel.value);
    let tempo = Number(temp.value);
    let espa = Number(esp.value);

    if(velo == 0){
        alert(velo = espa/tempo);
    } else if (tempo == 0){
        alert(tempo = espa / velo)
    } else if(espa == 0){
        alert(espa = velo * tempo)
    } 
}