document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        let numeroAleatorioFloor = Math.floor(numeroAleatorio);
        let numeroAleatorioRound = Math.round(numeroAleatorio);
        let numeroAleatorioCeil = Math.ceil(numeroAleatorio);


        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.getElementById('resultado-floor').innerText = numeroAleatorioFloor;
        document.getElementById('resultado-round').innerText = numeroAleatorioRound;
        document.getElementById('resultado-ceil').innerText = numeroAleatorioCeil;
        document.querySelector('.resultado').style.display = 'block';
    })
})