//////////////////////////////LA CONSOLA/////////////////////////////////////////////
//FUNCIONES DE REGISTRO (faltan un monton)
                                                           /*
console.clear(); //Limpia la consola

console.error(); //Muestra un msj de error en la consola

console.table(); //Muestra una tabla con la posicion y el valor de un array

//FUNCIONES DE CONTEO

console.count();

console.countReset();
                                                               
// Sirve por ejemplo para llevar el conteo de cuantas veces se ejecuto una funcion y verlo en la consola

//FUNCIONES DE AGRUPACION

console.group("Nombre del grupo");
console.groupEnd();
                                                              

//FUNCIONES DE TEMPORIZACION

console.time(); //Inicia un temporizador
console.timeLog(); //Nos muestra cuanto tiempo va desde que lo iniciamos
console.timeEnd(); //Termina el temporizador 
                                                                  

//PROBLEMA 1:

const materias = {
    fisica: [90,6,3,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = ()=> {
    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]);

        if (asistencias >= 90) {
            console.log("%c   Asistencias en orden","color:green");
        } else {
            console.log("%c   Falta de asistencias","color:red");
        }
        if (promedio >= 7) {
            console.log("%c   Promedio en orden","color:green");
        } else {
            console.log("%c   Promedio desaprobado","color:red");
        }
        if (trabajos >= 3) {
            console.log("%c   Trabajos practicos en orden","color:green");
        } else {
            console.log("%c   Faltan trabajos practicos","color:red");
        }
    }
}

aprobo();
                                                           */
//PROBLEMA 2:

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (var i = 0; i < 14; i++){
    if(i == 0){
        console.group("semana 1");
    }
    console.group("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if(i == 6){
        console.groupEnd();
        console.groupCollapsed("semana 2");
    }
}

console.groupEnd();
console.groupEnd();