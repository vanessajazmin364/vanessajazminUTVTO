function login(){

let user=document.getElementById("usuario").value.trim();
let pass=document.getElementById("password").value.trim();

if(user==="vane" && pass==="1234"){

localStorage.setItem("login","true");

document.getElementById("login").style.display="none";
document.getElementById("sistema").style.display="block";

}else{

alert("Usuario o contraseña incorrectos");

}

}

function logout(){

localStorage.removeItem("login");

location.reload();

}

/* SI YA ESTABA LOGUEADO */

if(localStorage.getItem("login")=="true"){

document.getElementById("login").style.display="none";
document.getElementById("sistema").style.display="block";

}

/* AGREGAR CITA */

function agregarCita(){

let nombre=document.getElementById("nombre").value;
let telefono=document.getElementById("telefono").value;
let correo=document.getElementById("correo").value;
let fecha=document.getElementById("fecha").value;
let hora=document.getElementById("hora").value;
let motivo=document.getElementById("motivo").value;

let cita=document.createElement("div");

cita.className="cita";

cita.innerHTML=`
<b>Paciente:</b> ${nombre}<br>
<b>Teléfono:</b> ${telefono}<br>
<b>Correo:</b> ${correo}<br>
<b>Fecha:</b> ${fecha} ${hora}<br>
<b>Motivo:</b> ${motivo}<br>

<button onclick="editarCita(this)">Editar</button>
<button onclick="eliminarCita(this)">Eliminar</button>
`;

document.getElementById("listaCitas").appendChild(cita);

/* LIMPIAR FORMULARIO */

document.getElementById("nombre").value="";
document.getElementById("telefono").value="";
document.getElementById("correo").value="";
document.getElementById("fecha").value="";
document.getElementById("hora").value="";
document.getElementById("motivo").value="";

}

/* ELIMINAR */

function eliminarCita(boton){

boton.parentElement.remove();

}

/* EDITAR */

function editarCita(boton){

let cita=boton.parentElement;

let nombre=prompt("Nombre del paciente:");
let telefono=prompt("Teléfono:");
let correo=prompt("Correo:");
let fecha=prompt("Fecha:");
let motivo=prompt("Motivo:");

cita.innerHTML=`
<b>Paciente:</b> ${nombre}<br>
<b>Teléfono:</b> ${telefono}<br>
<b>Correo:</b> ${correo}<br>
<b>Fecha:</b> ${fecha}<br>
<b>Motivo:</b> ${motivo}<br>

<button onclick="editarCita(this)">Editar</button>
<button onclick="eliminarCita(this)">Eliminar</button>
`;

}
