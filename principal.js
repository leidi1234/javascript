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
    var paragrafo = document.querySelector("#latim"); if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
}
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
}  vfunction validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}ar botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
    }

    var pacienteTr = montaTr(paciente);    

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});  vvvar form = document.querySelector("#form-adiciona");
var paciente = obtemPacienteDoFormulario(form);
var pacienteTr = montaTr(paciente);

if (!validaPaciente(paciente)) {
    console.log("Paciente inválido");
    return;
}

//...<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>vvvar pacientes = document.querySelectorAll(".paciente");vvar pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {

});vvvar pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {

    });
});var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});vvvar pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});vvar pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});<section class="container">
    <h2>Meus pacientes</h2>
    <label for="filtrar-tabela">Filtre:</label>
    <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
    <table>
        <thead>
          <tr>
             <th>Nome</th>
             <th>Peso(kg)</th>
             <th>Altura(m)</th>
             <th>Gordura Corporal(%)</th>
             <th>IMC</th>
    </tr>
</thead>vvv#filtrar-tabela {
    width: 200px;
    height: 35px;
    margin-bottom: 10px;
}vvar campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);vvvvar campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo");
});   
