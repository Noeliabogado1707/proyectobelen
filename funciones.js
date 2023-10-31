/*let usuario;
usuario = prompt("Ingresa tu nombre");
alert("Bienvenida " + usuario);*/ //Aqui cambie el saludo por la funcion saludar. espero este bien
function saludar () {
    let usuario=prompt("Ingresa tu nombre")
    console.log("Bienvenido " + usuario+"!")
}
saludar();
let total = 0;

let servicio = prompt(
  "Seleccione el servicio: 1-Manicura 2-Pedicura 3-Pestañas 0-salir o siguiente"
);
while (servicio!="0"){
switch (servicio) {
  case "1":
    alert("Estas a punto de reservar turno para manicura, el precio es $2500");
    total = total+2500;
    break;

  case "2":
    alert("Estas a punto de reservar turno para pedicura, el precio es $3000");
    total = total+3000;
    break;

  case "3":
    alert("Estas a punto de reservar turno para pestañas, el precio es $5500");
    total = total+5500;
    break;
  default:
    break;
} 
alert ("Llevas gastado $" + total);
servicio = prompt(
    "Seleccione el servicio: 1-Manicura 2-Pedicura 3-Pestañas 0-salir"
  );
}

let fecha = prompt(
    "Seleccione el dia: 1-Miércoles 2-Jueves 3-Viernes 4-Sabado 0-salir"
  );
while (fecha!="0"){
switch (fecha) {
  case "4":
    alert("Estas a punto de reservar turno para el Miércoles");
    break;
 case "5":
    alert("Estas a punto de reservar turno para el Jueves");
    break;
   case "6":
    alert("Estas a punto de reservar turno para el Viernes");
    break;
 case "7":
    alert("Estas a punto de reservar turno para el Sábado");
    break;
  default:
    break;
}
}
alert ("Tu turno será " + fecha);
/*
function unir( servicio, fecha){
    return servicio + fecha;
}
let resultado = unir (servicio , fecha);
    console.log (resultado);*/  //Aqui quise hacer una funcion que me uniera el servicio elegido con la fecha pero no me salio