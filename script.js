const temperaturas = [
    {id: 1, temperatura: 22.5},
    {id: 2, temperatura: 23.0},
    {id: 3, temperatura: 21.8},
    {id: 4, temperatura: 24.1},
    {id: 5, temperatura: 22.0}
]

function simularLeitura() {
    const numeroSorteado = Math.floor(Math.random() * temperaturas.length);
    const sorteio = Math.floor(numeroSorteado);
    const temp = temperaturas[sorteio].temperatura
    document.getElementById("temperature").textContent = `${temp} °C`;
}