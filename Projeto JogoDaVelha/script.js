    window.onload = main

    function main() {
        document.getElementById('velha').style.display = "none";

    }

    var pos = ["c", "c", "c", "c", "c", "c", "c", "c", "c",];
    var Jogador_atual = "x";
    var jogadorprimario
    var ponto_x = 0;
    var ponto_o = 0;
    var verificaC;

    var leNomes = function(){
        var jogador1 = prompt("Jogador 1");
        document.getElementById("jogador1").innerHTML= jogador1 + '<div id="jogador1">:</div>';

        var jogador2 = prompt("Jogador 2");
        document.getElementById("jogador2").innerHTML= jogador2 + '<div id="jogador2">:</div>';
    
        document.getElementById("velha").style.display = "block";
        }
    
var verificacao = function() {
    var venceu = "c";
    if (
        ((pos[0] == pos[1]) && (pos[1] == pos[2]) || (pos[0] == pos[3]) && (pos[3] == pos[6]) || (pos[0] == pos[4]) && (pos[4] == pos[8]))
    ) { venceu = pos[0]; }
    if (
        ((pos[1] == pos[4]) && (pos[4] == pos[7]))
    ) { venceu = pos[1]; }
    if (
        ((pos[2] == pos[5]) && (pos[5] == pos[8]) || (pos[2] == pos[4]) && (pos[4] == pos[6]))
    ) { venceu = pos[2]; }
    if (
        ((pos[3] == pos[4]) && (pos[4] == pos[5]))
    ) { venceu = pos[3]; }
    if (
        ((pos[6]) == pos[7]) && (pos[7] == pos[8])) { venceu = pos[6]; }
    return venceu;
}
var joga = function(posicao) {
    if (pos[parseInt(posicao)] == 'c') {
        if (Jogador_atual == 'x') {
            document.getElementById(posicao).innerHTML = '<div class = "joga"><img src = "X.png"></div>';
            pos[parseInt(posicao)] = "x";
            Jogador_atual = "o";
        } else {
            document.getElementById(posicao).innerHTML = '<div class = "joga"><img src = "O.png"></div>';
            pos[parseInt(posicao)] = "o";
            Jogador_atual = "x";
        }
    }
    if (verificacao() != 'c') {
        if (verificacao() == 'x') {
            ponto_x++;
        } else {
            ponto_o++;
        }
        alert(verificacao() + " ganhou!");
        pos = ["c", "c", "c", "c", "c", "c", "c", "c", "c"];
        if (jogadorprimario == 'x') {
            jogadorprimario == 'o'
        } else {
            jogadorprimario == 'x'
        }
        Jogador_atual == jogadorprimario;
        for (var i = 0; i < 9; i++) {
            document.getElementById(i.toString()).innerHTML = '<div class = "joga"></div>';
        }
        for (var i = 0; i < 9; i++) {
            document.getElementById(i.toString()).innerHTML = "<di></div>";
        }
        document.getElementById("jogador1").innerHTML = jogador1 + ":" + ponto_x;
        document.getElementById("jogador2").innerHTML = jogador2 + ":" + ponto_o;
    
    }else {
        verificaC='c'
        for(var i=0; i < 9; i++){
            if(pos[i]=='c'){
                verificaC = 'c'
            }
        }
        if(verificaC != 'c'){
            alert(verificaC + "VISH, DEU VELHA!")
        }
    } 
}
