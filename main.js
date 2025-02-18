const invitados = [
    "Mauro y Mary Luz",
    "Josue y Eloina",
    "Juliet y Simon",
    "Tere y Alvaro",
    "Olguita",
    "Fanny",
    "Clau",
    "Sarita",
    "Esteban",
    "Clau y Henry",
    "Nico",
    "Yura y David",
    "Augusto",
    "Samu",
    "Yimmy y Maribel",
    "Sofi",
    "Harrison",
    "Moni y Jaime",
    "Chucha Ramona",
    "Aurora",
    "Miguel y Gladis",
    "JP",
    "Yeraldo",
    "Anniel",
    "Francy",
    "Victor y Gisela",
    "Victor y Fidelia",
    "Juan Pablo y Stefany",
    "Stellita",
    "Enrique y Stella",
    "Joel y Yessi",
    "Albita y Robert",
    "Virginia y Jorgito ",
    "Adrianita",
    "Maria Helena",
    "Anita",
    "Maryis",
    "Pili y Miguel",
    "Tere",
    "Yeissi",
    "Lucho",
    "Jorge",
    "Marco",
    "Eduardo y Maria",
    "Guillermo y Magda",
    "Judith y Hector",
    "Angie y Cristian",
    "Alex y Lorena",
    "Mariana",
    "Cecilia y Jose",
    "Jhon y Jazmin",
    "Nerio",
    "Fercho",
    "Flor",
    "Angela",
    "Lien y Euledis",
    "Angel",
    "Karen y Camilo",
    "Valen",
    "Raquel",
    "Santiago",
    "Emiro y Esperanza",
    "Inesita",
    "Victor y Johana",
    "Liyen",
    "Matilde",
    "Jorge y Esposa",
  ];
  

document.addEventListener("DOMContentLoaded", ()=> {
    const fecha = new Date("02/23/2025");
    const hoy = new Date();
    const params = location.search;
    let nombre = ""
    
    


    // * Variables de Dom
    const dias = document.getElementById("dias")
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");
    const previus = document.getElementById("previus");
    const next = document.getElementById("next");
    const play = document.getElementById("play");
    const especial = document.getElementById("especial");
    const confirmar = document.getElementById("confirmar");
    const a = document.querySelector("a");
    /**
     * @type {HTMLAudioElement}
     */
    const audio = document.getElementById("audio");
    let pause = true;

    let indexId = params.indexOf("id");
    if (indexId > -1) {
        let id = parseFloat(params.substring(indexId+"id=".length))-1;
        nombre = invitados[id]
        especial.innerHTML = "¡Te esperamos, "+nombre+"!";
        
    }

    play.onclick = ()=> {
        if (pause) {
            audio.play();
        } else {
            audio.pause();
        }
    }
    
    audio.onpause = ()=> {
        play.classList.add("play");
        play.classList.remove("pause");
        pause = true;
    }

    audio.onplay = ()=> {
        play.classList.remove("play");
        play.classList.add("pause")
        pause = false;
    }

    previus.onclick = ()=> {
        if (audio.currentTime > 10) {
            audio.currentTime -= 10
        } else {
            audio.currentTime = 0;
        }
    }

    next.onclick = ()=> {
        if (audio.currentTime + 10 < audio.duration) {
            audio.currentTime += 10;
        } else {
            audio.currentTime = audio.duration;
        }
    }

    confirmar.onclick = ()=> {

        let mensaje = "Hola, Natalia. "+nombre+"";
        if (nombre.includes("y")) {
            mensaje += ", confirman asistencia. Gracias por la invitacion 💗"
        } else {
            mensaje += ", confirmo asistencia. Gracias por la invitacion 💗"
        }
        let enlace = "https://wa.me/573209927694/?text="+mensaje;
        a.href = enlace;
        a.click();

    }

    // * tick que se ejecuta cada segundo
    let s = setInterval(() => {
        const microFecha = fecha.getTime();
        const microHoy = hoy.getTime();
        const microsegundos = microFecha - microHoy;
        let segundosFaltan = microsegundos / 1000;
        let minutosFaltan = segundosFaltan / 60;
        let horasFaltan = minutosFaltan / 60;
        let diasFaltan = horasFaltan / 24;
        
        segundosFaltan = Math.floor(segundosFaltan % 60);
        minutosFaltan = Math.floor(minutosFaltan % 60);
        horasFaltan = Math.floor(horasFaltan % 24);
        diasFaltan = Math.floor(diasFaltan);

        dias.innerHTML = diasFaltan;
        horas.innerHTML = horasFaltan;
        minutos.innerHTML = minutosFaltan;
        segundos.innerHTML = segundosFaltan;
        hoy.setTime(microHoy+1000);
    }, 1000);

})

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});
