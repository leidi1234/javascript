var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

console.log(paciente)

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc;
    }    
}<script>
    var paragrafo = document.querySelector("#latim");
    paragrafo.style.backgroundColor = "blue";
</script><script>
   //resultadovar titulo = document.querySelector("h1");
console.log(titulo.classList);
vvar pacientes = document.querySelectorAll(".paciente");
console.log(paciente);var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);vvvvar pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc;
    }    
}    // Restante do código

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        //ALTERAÇÃO AQUI...
        tdImc.textContent = imc.toFixed(2);
    }.paciente-invalido{
    background-color: lightcoral;
}if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;

    paciente.classList.add("paciente-invalido");
}if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;

    paciente.classList.add("paciente-invalido");
}if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;

    paciente.classList.add("paciente-invalido");
}
}       
