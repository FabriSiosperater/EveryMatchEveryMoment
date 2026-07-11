/*
=========================================
Every Match Every Moment
Versión 0.2 Kickoff
Archivo: app.js
=========================================
*/

function showScreen(screenId){

    // Ocultar todas las pantallas

    const screens=document.querySelectorAll(".screen");

    screens.forEach(screen=>{

        screen.classList.remove("active");

    });

    // Mostrar la seleccionada

    document
        .getElementById(screenId)
        .classList.add("active");

}
