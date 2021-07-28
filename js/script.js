document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);


function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != ""){
  alert("Muito Obrigada pelo contato! Retornarei em breve.")
  }else{
    alert("Por favor, preencha os campos nome, email e telefone!")
  }
}