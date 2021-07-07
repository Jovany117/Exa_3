// pintar la fecha
const fecha = new Date();
const date = {
    dia: fecha.getDate(),
    mes: fecha.getMonth(),
    anio: fecha.getUTCFullYear(),
}

document.write(`<span class="fechita"> ${date.dia} / ${date.mes} / ${date.anio} </span>`);
// Fin de la fecha

// INSTRUCCIONES, REALIZAR EL EXAMEN CON LOS PROCEDIMIENTOS QUE SE DESCRIBEN A CONTINUACIÓN.
// UNA VEZ TERMINADO EL EXAMEN SE DEBERÁ TOMAR CAPTURA DEL CÓDIGO FINAL Y CAPTURA DEL CUERPO DE LA PÁGINA.
// SE DEBERÁ SUBIR A DRIVE Y POSTERIORMENTE A LA PLATAFORMA DE MOODLE.

/// AQUÍ EMPIEZA EL EXAMEN

// 1.- Crea un Objeto Anidado, con la temática de caricaturas, cada objeto debe tener al menos 4 propiedades.
// 2.- Pinta el Objeto antes mencionado en el cuerpo de la página con todas sus propiedades.
const serie = {
    
    capitulos: "291" ,
    Razas: {
        R1:"Raza de Freezer",
        R2: "Namekianos",
        R3: "Majin" ,
        R4: "Saiyajins"
    },
    Poder: {
        Pw1: "120,000,00",
        Pw2: "35000",
        Pw3: "1,195,000,000,000",
        Pw4: "15,000 en base hasta 2,000,000,000,000"
    },
    extras: {
        extra1: "Los namekianos poseen las esferas del dragon",
        extra2: "Goku casi siempre salva a todos",
        extra3: "Goku y Vegeta crean a Vegito y Gogeta"
    }
}
// parte 1
document.querySelector("#capitulos").innerHTML = serie.capitulos;
document.querySelector("#Razas1").innerHTML = serie.Razas.R1;
document.querySelector("#Razas2").innerHTML = serie.Razas.R2;
document.querySelector("#Razas3").innerHTML = serie.Razas.R3;
document.querySelector("#Razas4").innerHTML = serie.Razas.R4;
// parte 2
document.querySelector("#Pw1").innerHTML = serie.Poder.Pw1;
document.querySelector("#Pw2").innerHTML = serie.Poder.Pw2;
document.querySelector("#Pw3").innerHTML = serie.Poder.Pw3;
document.querySelector("#Pw4").innerHTML = serie.Poder.Pw4;
// 
document.querySelector("#extra1").innerHTML = serie.extras.extra1;
document.querySelector("#extra2").innerHTML = serie.extras.extra2;
document.querySelector("#extra3").innerHTML = serie.extras.extra3;
// 3.- Dado el siguiente Array:
const anios = [2010, 2020, 2015, 2017, 4504];
// Pinta el Año 2015 en el cuerpo de la página
document.querySelector('.arrayAnio').innerHTML= anios[2];


// 4.- Dado el siguiente Array:
const vocales = ['a', 'e', 'i', 'o', 'u'];
// 5.- Recorrelo con el ciclo for e imprimelo en el cuerpo de la página
for (let index = 0; index < vocales.length; index++) {
    document.querySelector('.vocales').innerHTML = vocales[index];
}
// 6.- Imprime las vocales al revés, es deci u, o, i, e, a.
document.querySelector('.vocalesReves').innerHTML= vocales.reverse();
// 7.- Imprime las vocales desordenadas.

/// lINEA DE EJEMPLO PARA IMPRIMIR ALGO
// let algo = " Texto de prueba kasjdkasjda "
// document.write(`<section class="area"> ${algo} </section>`);