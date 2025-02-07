const invitados = [
    "Mauro",
    "Mary Luz",
    "josue",
    "Eloina",
    "Juliet",
    "Simón",
    "Tere",
    "Álvaro",
    "Olga",
    "Fanny",
    "Claudia",
    "Emiro",
    "Esperanza",
    "Claudia",
    "Sara",
    "Esteban",
    "Nicolás",
    "Yurany",
    "David",
    "Augusto",
    "Samuel",
    "Yimmy",
    "Maribel",
    "Sofía",
    "Harrison",
    "Mónica",
    "Jaime",
    "Angélica",
    "Aurora",
    "Miguel acero",
    "Gladis acero",
    "Juan Pablo",
    "Yeraldo",
    "Anniel",
    "Francy",
    "Víctor piñeros",
    "Gisela",
    "Sofía",
    "Víctor castaño",
    "fidelia",
    "Juan Pablo",
    "Estefany",
    "Stella Alonso",
    "Enrique",
    "Estella",
    "Joel",
    "Yessica",
    "Albita",
    "Robert",
    "Virginia",
    "Jorgito Fonseca",
    "Adriana",
    "María Helena",
    "Anita",
    "Maryis",
    "Pilar",
    "Miguel",
    "Teresita",
    "Yeissi",
    "lucho",
    "Jorge joven",
    "Marco",
    "Eduardo",
    "María",
    "Guillermo",
    "Magda",
    "Judith",
    "hector",
    "Angie",
    "Cristian",
    "Alex",
    "Lorena",
    "Mariana",
    "Cecilia",
    "Natalia",
    "Amparo",
    "Eugenio",
    "Iván",
    "Jhon",
    "Jazmín",
    "Nerio",
    "Fercho",
    "Flor",
    "Ángela",
    "Lien",
    "Euledis"
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
        let mensaje = "Hola, Natalia, "+nombre+" confirma asistencia :D";
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