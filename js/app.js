/*
=========================================
Every Match Every Moment
Versión: v0.2 Kickoff
Archivo: app.js
=========================================
*/

function showScreen(screenId) {

    // Obtener todas las pantallas
    const screens = document.querySelectorAll(".screen");

    // Ocultarlas
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    // Mostrar la pantalla seleccionada
    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
    }

}
