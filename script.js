let clienteWeb = null;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

const temperaturaPagina = document.getElementById('temp')

clienteWeb.onMessageArrived = function(message) {
    const payload = message.payloadString;
    const dados = JSON.parse(payload)
    
    temperaturaPagina.textContent = String(dados.temperatura) + ' °C'
    console.log('Dados: ' + payload)

    setTimeout(function(){
        temperaturaPagina.textContent = '- -'
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

