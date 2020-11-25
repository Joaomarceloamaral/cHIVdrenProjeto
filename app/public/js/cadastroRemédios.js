var dat = new Date();

var nome = document.getElementById('inNomer1');
var quant = document.getElementById('inQuant1')
document.getElementById('data').min = ""+dat.getYear()+"-"+dat.getMonth()+"-"+dat.getDay()+"";
var data = document.getElementById('data');
var horario = document.getElementById('horario');
var botao = document.getElementById('btnRegistrarR');

botao.disabled = true;

function checkNome(){
    
    if(nome.value.length < 8 || nome.value.length >50){
        botao.disabled = true;
    }else{
        if(nome.value.length != 0 && quant.value.length != 0 && data.value.length != 0 && horario.value.length != 0){
            botao.disabled = false;
        }
    }

}
function checkQuant(){
    
    if(quant.value.length < 1 || quant.value.length >50){
        botao.disabled = true;
    }else{
        if(quant.value.length != 0 && nome.value.length != 0 && data.value.length != 0 && horario.value.length != 0){
            botao.disabled = false;
        }
    }

}

function checkData(){
    
    if(data.value.length < 1){
        botao.disabled = true;
    }else{
        if(data.value.length != 0 && horario.value != "00:00" && quant.value.length != 0 && nome.value.length != 0){
            botao.disabled = false;
        }
    }

}

function checkHorario(){
    
    if(horario.value == "00:00"){
        botao.disabled = true;
    }else{
        if(data.value.length != 0 && horario.value.length != 0 && quant.value.length != 0 && nome.value.length != 0){
            botao.disabled = false;
        }
    }

}

nome.onblur = checkNome;

quant.onblur = checkQuant;

data.onblur = checkData;

horario.onblur = checkHorario;