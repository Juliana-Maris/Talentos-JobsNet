document.forms['cad'].addEventListener('submit', (event) => {
    event.preventDefault();
    const button = document.getElementById('submit-btn');
    const i = document.querySelector('i');
    button.classList.add('buttonload');
    i.classList.add('fa');
    i.classList.add('fa-circle-o-notch');
    i.classList.add('fa-spin');
    
    fetch(event.target.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target)) 
    }).then((resp) => {
        if (resp.redirected) {
            window.location.href = resp.url;
        }
        return resp.json();
    }).then((body) => {
        if (body.error == 1) {
            alert("Esse CPF já está cadastrado!")
        } 
    }).catch((error) => {   
    });
    button.classList.remove('buttonload');
    i.classList.remove('fa');
    i.classList.remove('fa-circle-o-notch');
    i.classList.remove('fa-spin');
});

const strCPF = document.getElementById("cpf").value;
const input = document.querySelector("input");

function ValidaCPF(){	
	var cpf=document.getElementById("cpf").value; 
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    const span = document.getElementById("erro-cpf");
	 
	if (cpfValido.test(cpf) == false)	{ 
        span.innerHTML = "Digite um CPF válido";
        span.style.marginTop = "8px"
    } 
    }
  function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}
  function fMascEx() {
obj.value=masc(obj.value)
}
   function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
return cpf
}
