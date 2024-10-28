// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No me digas que me quieres", time: 11 },
  { text: "Porque puede que me empiece a transformar", time: 13.5 },
  { text: "Me salen superpoderes", time: 16 },
  { text: "Y la fuerza del soldado universal", time: 18 },
  { text: "No suspendo nada, nada", time: 21 },
  { text: "He aprobado la tercera evaluación", time: 23 },
  { text: "Y a tu lado nada puede salir mal", time: 26 },
  { text: "Nada puede salir mal", time: 29 },
  { text: "Quiero decirte", time: 32 },
  { text: "Que a tu lado soy mejor", time: 35 },
  { text: "Que estoy colado, estoy colado", time: 37 },
  { text: "Colado por tu amor", time: 40 },
  { text: "Y es que cuando estoy cerca de ti", time: 42 },
  { text: "Se despierta el tigre que hay en mí", time: 44.5 },
  { text: "Porque estoy colado, estoy colado", time: 47 },
  { text: "Más colado...", time: 50 },
  { text: "que el ColaCao", time: 52 },
  { text: "Y es que desde que te quiero", time: 64.5 },
  { text: "Me he pasado casi entero el Donkey Kong", time: 67 },
  { text: "Y me brilla más el pelo", time: 69.5 },
  { text: "Y la ropa me sienta mucho mejor", time: 72 },
  { text: "Voy a darlo todo, todo", time: 74.5 },
  { text: "A quererte en modo experto y sin fallar", time: 76.5 },
  { text: "Yo seré el chico perfecto para ti", time: 78.5 },
  { text: "Soy perfecto para ti", time: 82.5 },
  { text: "Quiero decirte", time: 85 },
  { text: "Que a tu lado soy mejor", time: 89 },
  { text: "Que estoy colado, estoy colado", time: 91 },
  { text: "Colado por tu amor", time: 94 },
  { text: "Y es que cuando estoy cerca de ti", time: 96 },
  { text: "Se despierta el tigre que hay en mí", time: 98.5 },
  { text: "Porque estoy colado, estoy colado", time: 101 },
  { text: "Más colado...", time: 103 },
  { text: "Y es lo que hay", time: 117 },
  { text: "Que soy más guay", time: 119.5 },
  { text: "Cuando tú estás aquí a mi lado", time: 120.5 },
  { text: "Y yo a tu lado", time: 124 },
  { text: "y yo a tu lado", time: 125 },
  { text: "Y es que cuando estoy cerca de ti", time: 130},
  { text: "Se despierta el tigre que hay en mí", time: 132.5 },
  { text: "Porque estoy colado, estoy colado", time: 135 },
  { text: "Más colado que el Nesquik", time: 138 },
  { text: "Y es que yo mejoro junto a ti", time: 140 },
  { text: "En los punto cero de la vid", time: 143 },
  { text: "Porque estoy colado, estoy colado", time: 146 },
  { text: "Más colado...", time: 148 },
  { text: "que el ColaCao", time: 150 },
  { text: "TE AMO MI AMOR", time: 155 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);