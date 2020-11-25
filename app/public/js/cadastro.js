var passwordtext = document.getElementById('inPassword1');
var passwordtext1 = document.getElementById('inPassword2');
var nome = document.getElementById('inNome1');
var botao = document.getElementById('btnRegistrar')
var msg1 = document.getElementById('feedback');
var msgm = document.getElementById('inPass1');
var msg = document.getElementById('inPass2');
var Email = document.getElementById('inEmail1');
botao.disabled = true;

function checkUsername(){
    
    if(nome.value.length < 8 || nome.value.length >50){
        msg1.textContent = 'O nome deve ter no minimo 8 caracteres';
        botao.disabled = true;
    }else{
        msg1.textContent = '';
        if(passwordtext.value.length != 0 || passwordtext1.value.length != 0){
            botao.disabled = false;
        }
    }

}
function checkEmail(){
    
    if(nome.value.length < 1 || nome.value.length >50){
        botao.disabled = true;
    }else{
        msg1.textContent = '';
        if(passwordtext.value.length != 0 || passwordtext1.value.length != 0){
            botao.disabled = false;
        }
    }

}

function checkPass(){
    
    if(passwordtext.value.length < 8 || passwordtext.value.length >16){
        msgm.textContent = 'A senha deve ter no minimo 8 caracteres';
        botao.disabled = true;
    }else{
        msgm.textContent = '';
        botao.disabled = false;
    }

    if(passwordtext.value != passwordtext1.value || passwordtext.value.length == 0 || passwordtext1.value.length == 0){
        msg.textContent = 'As senhas devem ser iguais';
        botao.disabled = true;
    }else{
        msg.textContent = '';
        botao.disabled = false;
    }    

}

nome.onblur = checkUsername;

Email.onblur = checkEmail;

passwordtext.onblur = checkPass;

passwordtext1.onblur = checkPass;



