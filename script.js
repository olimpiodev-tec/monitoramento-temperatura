let clienteWeb = null;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

const temperaturaPagina = document.getElementById('temp')
const umidadePagina = document.getElementById('umi')

clienteWeb.onMessageArrived = function(message) {
    const payload = message.payloadString;
    const dados = JSON.parse(payload)
    
    temperaturaPagina.textContent = String(dados.temperatura) + ' °C'
    umidadePagina.textContent = String(dados.umidade) + ' %'
    console.log('Dados: ' + payload)

    setTimeout(function(){
        temperaturaPagina.textContent = '- -'
        umidadePagina.textContent = '- -'
    }, 2000)
    
};

clienteWeb.connect({   
    useSSL: true, 
    onSuccess: function() {
        console.log('A conexão com Broker foi bem sucedida')
        clienteWeb.subscribe('senai510/temperatura/enviar');
    },
    onFailure: function() {
        console.log('A conexão com Broker falhou')
    }
});

