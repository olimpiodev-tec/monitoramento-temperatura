function simularLeitura() {
    const temp = (Math.random() * 15 + 20).toFixed(1);
    document.getElementById("temperature").textContent = `${temp} °C`;
}