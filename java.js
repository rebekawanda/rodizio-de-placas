function Placa(){
    const s = document.querySelector('#s').value;
    const texto = document.querySelector("h3");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    //
    if((s=="Segunda") || (s=="Segunda-feira") || (s=="segunda") || (s=="segunda-feira")){
    if((valor=="1") || (valor=="2")){
        texto.innerHTML = "Você não deve andar com o seu veiculo";
    }
    else if((valor=="3") || (valor=="4") || (valor=="5") || (valor=="6") || (valor=="7") || (valor=="8") || (valor=="9")){
        texto.innerHTML = "Você pode andar com o seu veiculo";
    }
}
    if((s=="Terça") || (s=="Terça-feira") || (s=="terça") || (s=="terça-feira")){
    if((valor=="3") || (valor=="4")){
        texto.innerHTML = "Você não deve andar com o seu veiculo";
    }
    else if((valor=="1") || (valor=="2") || (valor=="5") || (valor=="6") || (valor=="7") || (valor=="8") || (valor=="9")){
        texto.innerHTML = "Você pode andar com o seu veiculo";
    }
}
    if((s=="Quarta") || (s=="Quarta-feira") || (s=="quarta") || (s=="quarta-feira")){
    if((valor=="4") || (valor=="5")){
        texto.innerHTML = "Você não deve andar com o seu veiculo";
    }
    else if((valor=="1") || (valor=="2") || (valor=="3") || (valor=="4") || (valor=="7") || (valor=="8") || (valor=="9")){
        texto.innerHTML = "Você pode andar com o seu veiculo";
    }
}
    if((s=="Quinta") || (s=="Quinta-feira") || (s=="quinta") || (s=="quinta-feira")){
    if((valor=="6") || (valor=="7")){
        texto.innerHTML = "Você não deve andar com o seu veiculo";
    }
    else if((valor=="1") || (valor=="2") || (valor=="3") || (valor=="4") || (valor=="7") || (valor=="8") || (valor=="9")){
        texto.innerHTML = "Você pode andar com o seu veiculo";
    }
}
    if((s=="Sexta") || (s=="Sexta-feira") || (s=="sexta") || (s=="sexta-feira")){
    if((valor=="1") || (valor=="2")){
        texto.innerHTML = "Você não deve andar com o seu veiculo";
    }
    else if((valor=="1") || (valor=="2") || (valor=="3") || (valor=="4") || (valor=="5") || (valor=="6") || (valor=="7")){
        texto.innerHTML = "Você pode andar com o seu veiculo";
    }
}
}