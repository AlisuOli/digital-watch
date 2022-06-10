// Funcionamento do Relógio

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {

    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

})

// Funcionamento do Relógio

// Modo Escuro

const chx = document.getElementById('chx');

chx.addEventListener('change', function () {
    document.body.classList.toggle('dark');
})

// Modo Escuro