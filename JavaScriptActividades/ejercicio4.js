var numeroAleatorio = parseInt(Math.random()*101);

var resultado = prompt("Adivina el número del 1 al 100"+ numeroAleatorio);


while(Number(resultado)){
    if(resultado != numeroAleatorio){
        alert("Sigue intentandolo, el numero es: "+numeroAleatorio);
        var resultado = prompt("Adivina el número del 1 al 100"+ numeroAleatorio);
        var numeroAleatorio = parseInt(Math.random()*101);

    }else{
    }
}

