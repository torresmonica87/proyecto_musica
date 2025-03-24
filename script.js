document.addEventListener("DOMContentLoaded", () => {
  class Artista {
    constructor(artista, foto) {
      this.artista = artista;
      this.foto = foto;
    }
  }

  const artistas = [
    new Artista("Phil Collins", "./imagenes/fotophil.jpg"),
    new Artista("Roberto Carlos", "./imagenes/roberto.jpg"),
    new Artista("Marc Antoni", "./imagenes/marc.jpg"),
    new Artista("Andrea Bocelli","./imagenes/andrea.jpg"),
    new Artista("Frank Quintero","./imagenes/frank.jpg"),
    new Artista("Luis Miguel","./imagenes/luismi.jpg"),
    new Artista("Ha-Ash","./imagenes/ha-ash.jpg"),
    new Artista("Leonardo Favio","./imagenes/leonardo.jpg"),
    new Artista("David Bisbal","./imagenes/david.jpg"),
    new Artista("Hector y Tito","./imagenes/hectorytito.jpg"),
    new Artista("Wisin y Yandel","./imagenes/wisinyyandel.jpg"),
    new Artista("Don Omar","./imagenes/donomar.jpg"),
    new Artista("Ivy Queen","./imagenes/ivy.jpg"),
    new Artista("Jessi Uribe","./imagenes/jessi.jpg"),
    new Artista("Tego Calderón","./imagenes/tego.jpg"),
    new Artista("Tito el bambino","./imagenes/titobambino.jpg"),
    new Artista("Dalmata","./imagenes/dalmata.jpg"),
    new Artista("Romeo Santos","./imagenes/romeo.jpg"),
  ];

  function mostrarArtistas() {
    const lista = document.getElementById("artistas-lista");
  
    artistas.forEach((artista) => {
      const contenedor = document.createElement("div");
  
      const foto = document.createElement("img");
      foto.src = artista.foto;
      foto.alt = artista.artista;
  
  
      const nombre = document.createElement("h3");
      nombre.textContent = artista.artista;
  
     
      contenedor.appendChild(foto);
      contenedor.appendChild(nombre);
  
     
      lista.appendChild(contenedor);
    });
  }
  

  window.onload = mostrarArtistas;

  class Cancion {
    constructor(nombre, artista, año, duracion, genero, caratula, audio) {
      this.nombre = nombre;
      this.artista = artista;
      this.año = año;
      this.duracion = duracion;
      this.genero = genero;
      this.caratula = caratula;
      this.audio = audio;
    }
  }

  const canciones = [
    new Cancion(
      "TARZAN",
      "Phil Collins",
      "1993",
      "4:19",
      "Italo",
      "./imagenes/caratulatarzan.jpg",
      "./canciones/uno.mp3"
    ),
    new Cancion(
      "AMIGOS",
      "Roberto Carlos",
      "1977",
      "3:27",
      "Balada romántica",
      "./imagenes/caratularomanticas.jpg",
      "./canciones/dos.mp3"
    ),
    new Cancion(
      "QUIEN",
      "Marc Antony",
      "2002",
      "5:11",
      "Salsa",
      "./imagenes/caratulamarc.jpg",
      "./canciones/tres.mp3"
    ),
    new Cancion(
      "VIVO POR ELLA",
      "Andrea Bocelli y Marta Sánchez",
      "1997",
      "4:26",
      "Ópera pop",
      "./imagenes/caratulavivoporella.jpg",
      "./canciones/cuatro.mp3"
    ),
    new Cancion(
      "CANCIÓN PARA TI",
      "Frank Quintero",
      "1983",
      "4:30",
      "Pop",
      "./imagenes/caratularomanticas2.jpg",
      "./canciones/cinco.mp3"
    ),
    new Cancion(
      "A QUIEN VOY A MENTIRLE",
      "Marc Antoni",
      "2010",
      "5:08",
      "Salsa",
      "./imagenes/caratularomanticas3.jpg",
      "./canciones/seis.mp3"
    ),
    new Cancion(
      "SUEÑA",
      "Luis Miguel",
      "1996",
      "4:19",
      "Balada",
      "./imagenes/caratularomanticas4.jpg",
      "./canciones/siete.mp3"
    ),
    new Cancion(
      "TIERRA DE OSOS",
      "Phil Collins",
      "2003",
      "2:37",
      "Pop",
      "./imagenes/caratularomanticas5.jpg",
      "./canciones/ocho.mp3"
    ),
    new Cancion(
      "LO APRENDI DE TI",
      "Ha-Ash",
      "2003",
      "3:16",
      "Pop",
      "./imagenes/caratularomanticas6.jpg",
      "./canciones/nueve.mp3"
    ),
    new Cancion(
      "AHORA QUIEN",
      "Marc Antoni",
      "1999",
      "4:52",
      "Salsa",
      "./imagenes/caratularomanticas7.jpg",
      "./canciones/diez.mp3"
    ),
    new Cancion(
      "DIN DON",
      "Leonardo Favio",
      "1969",
      "3:35",
      "Balada",
      "./imagenes/caratularomanticas8.jpg",
      "./canciones/once.mp3"
    ),
    new Cancion(
      "FUISTE MÍA UN VERANO",
      "Leonardo Favio",
      "1970",
      "4:12",
      "Balada",
      "./imagenes/caratularomanticas9.jpg",
      "./canciones/doce.mp3"
    ),
    new Cancion(
      "TU VIDA EN LA MIA",
      "Marc Antoni",
      "2004",
      "6:17",
      "Salsa",
      "./imagenes/caratularomanticas10.jpg",
      "./canciones/trece.mp3"
    ),
    new Cancion(
      "PRINCESA",
      "David Bisbal",
      "2002",
      "3:21",
      "Pop Latino",
      "./imagenes/caratularomanticas11.jpg",
      "./canciones/catorce.mp3"
    ),
    new Cancion(
      "TU AMOR ME HACE BIEN",
      "Marc Antoni",
      "1999",
      "5:05",
      "Salsa",
      "./imagenes/caratularomanticas12.jpg",
      "./canciones/quince.mp3"
    ),
    new Cancion(
      "FLOR PALIDA",
      "Marc Antoni",
      "1999",
      "4:57",
      "Salsa",
      "./imagenes/caratularomanticas13.jpg",
      "./canciones/dieciseis.mp3"
    ),
    new Cancion(
      "BAILA MORENA",
      "Hector y Tito",
      "2004",
      "3:06",
      "Reguetón",
      "./imagenes/bailamorena.jpg",
      "./canciones/bailamorenahectorytito.mp3"
    ),
    new Cancion(
      "POSE",
      "Daddy Yankee",
      "2008",
      "3:45",
      "Reguetón",
      "./imagenes/pose.jpg",
      ".canciones/daddyyankee-pose.mp3"
    ),
    new Cancion(
      "DALE DON DALE",
      "Don Omar",
      "2003",
      "1:11",
      "Reguetón",
      "./imagenes/daledondale.jpg",
      ".canciones/donomar-daledondale.mp3"
    ),
    new Cancion(
      "NOCHE DE TRAVESURA",
      "Hector el Father",
      "2005",
      "3:29",
      "Reguetón",
      "./imagenes/nochedetravesura.jpg",
      "./canciones/hectorelfather-nochedetravesura.mp3"
    ),
    new Cancion(
      "YO QUIERO BAILAR",
      "Ivy Queen",
      "2003",
      "3:10",
      "Reguetón",
      "./imagenes/yoquierobailar.jpg",
      "./canciones/ivyqueen-yoquierobailar.mp3"
    ),
    new Cancion(
      "DULCE PECADO",
      "Jessy Uribe",
      "2017",
      "2:59",
      "Musica Regional Colombiana",
      "./imagenes/dulcepecado.jpg",
      "./canciones/jessyuribe-dulcepecado.mp3"
    ),
    new Cancion(
      "METELE SAZÓN",
      "Tego Calderón",
      "2003",
      "4:13",
      "Reguetón",
      "./imagenes/metelesazon.jpg",
      "./canciones/tego-metelesazon.mp3"
    ),
    new Cancion(
      "MI CAMA HUELE A TI",
      "Tito el Bambino",
      "2009",
      "3:58",
      "Reguetón",
      "./imagenes/micamahueleati.jpg",
      "./canciones/titoelbambino-micamahueleati.mp3"
    ),
    new Cancion(
      "ABUSADORA",
      "Wisin y Yandel",
      "2004",
      "3:27",
      "Reguetón",
      "./imagenes/abusadora.jpg",
      "./canciones/wisinyyandel-abusadora.mp3"
    ),
    new Cancion(
      "ELÉCTRICA",
      "Wisin y Yandel",
      "2005",
      "3:08",
      "Reguetón",
      "./imagenes/electrica.jpg",
      "./canciones/wisinyyandel-electrica.mp3"
    ),
    new Cancion(
      "LLAME PA' VERTE",
      "Wisin y Yandel",
      "2007",
      "3:24",
      "Reguetón",
      "./imagenes/llamepaverte.jpg",
      "./canciones/wisinyyandel-llamepaverte.mp3"
    ),
    new Cancion(
      "PAM PAM",
      "Wisin y Yandel",
      "2007",
      "3:56",
      "Reguetón",
      "./imagenes/pampam.jpg",
      "./canciones/wisinyyandel-pampam.mp3"
    ),
    new Cancion(
      "PEGAO",
      "Wisin y Yandel",
      "2005",
      "3:49",
      "Reguetón",
      "./imagenes/pegao.jpg",
      "./canciones/wisinyyandel-pegao.mp3"
    ),
    new Cancion(
      "PORQUE ME TRATAS ASI",
      "Wisin y Yandel",
      "2005",
      "4:08",
      "Reguetón",
      "./imagenes/porque.jpg",
      "./canciones/wisinyyandel-porquemetratasasi.mp3"
    ),
    new Cancion(
      "PASARELA",
      "Dalmata",
      "2009",
      "3:44",
      "Reguetón",
      "./imagenes/pasarela.jpg",
      "./canciones/dalmata-pasarela.mp3"
    ),
    new Cancion(
      "NOCHE DE SEXO",
      "Wisin y Yandel & Romeo Santos",
      "2005",
      "3:25",
      "Reguetón",
      "./imagenes/noche.jpg",
      "./canciones/wisinyyandelromeo-nochedesexo.mp3"
    ),
  ];

  let cancionSeleccionada = 0;

  const reproducirAudio = document.getElementById("reproducirAudio");
  const listaReproduccion = document.getElementById("listaReproduccion");
  const caratulaActual = document.getElementById("caratulaActual");
  const nombreCancion = document.getElementById("nombreCancion");

  canciones.forEach((sonido, index) => {
    const li = document.createElement("li");
    li.classList.add("icono-cancion");

    const img = document.createElement("img");
    img.src = sonido.caratula;
    img.alt = sonido.nombre;
    img.classList.add("miniatura");

    const nombre = document.createElement("span");
    nombre.textContent = sonido.nombre;

    li.appendChild(img);
    li.appendChild(nombre);
    li.addEventListener("click", () => Reproducir(index));
    listaReproduccion.appendChild(li);
  });

  function Reproducir(index) {
    cancionSeleccionada = index;
    reproducirAudio.src = canciones[cancionSeleccionada].audio;
    caratulaActual.src = canciones[cancionSeleccionada].caratula;
    nombreCancion.textContent = canciones[cancionSeleccionada].nombre;
    reproducirAudio.play();
  }

  document.getElementById("play").addEventListener("click", () => {
    if (reproducirAudio.src === "") {
      Reproducir(0);
    } else {
      reproducirAudio.play();
    }
  });

  document.getElementById("pause").addEventListener("click", () => {
    reproducirAudio.pause();
  });

  document.getElementById("prev").addEventListener("click", () => {
    const nuevaCancion =
      (cancionSeleccionada - 1 + canciones.length) % canciones.length;
    Reproducir(nuevaCancion);
  });

  document.getElementById("next").addEventListener("click", () => {
    const nuevaCancion = (cancionSeleccionada + 1) % canciones.length;
    Reproducir(nuevaCancion);
  });

  document.getElementById("mute").addEventListener("click", () => {
    const botonMute = document.getElementById("mute");

    if (reproducirAudio.muted) {
      reproducirAudio.muted = false;
      botonMute.textContent = "🔊";
    } else {
      reproducirAudio.muted = true;
      botonMute.textContent = "🔇";
    }
  });
});

const botonFavoritos = document.getElementById("favoritos");
    const listaFavoritos = document.getElementById("listaFavoritos");
    const inputCancion = document.getElementById("nombreCancion");

    botonFavoritos.addEventListener("click", () => {
        const nombreCancion = inputCancion.value.trim();
        
        if (nombreCancion) {
            const nuevaCancion = document.createElement("li");
            nuevaCancion.textContent = nombreCancion;

            // Crear botón de eliminar
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.style.marginLeft = "10px";
            botonEliminar.style.cursor = "pointer";
            
            // Evento para eliminar la canción
            botonEliminar.addEventListener("click", () => {
                listaFavoritos.removeChild(nuevaCancion);
            });

            // Añadir el botón al elemento de la canción
            nuevaCancion.appendChild(botonEliminar);
            listaFavoritos.appendChild(nuevaCancion);

            inputCancion.value = ""; 
        } else {
            alert("Por favor, ingresa el nombre de la canción.");
        }
    });