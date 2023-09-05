function updateClock(id, timeZone) {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone };
    const formattedTime = now.toLocaleTimeString('pt-BR', options);
    
    document.getElementById(id).textContent = formattedTime;
}

setInterval(() => {
    // Para atualizar os relógios para cada país
    updateClock('brasilClock', 'America/Sao_Paulo'); // Brasil
    updateClock('portugalClock', 'Europe/Lisbon'); // Portugal
    updateClock('englandClock', 'Europe/London'); // Inglaterra
    updateClock('switzerlandClock', 'Europe/Zurich'); // Suíça
}, 1000); 


// 1000 = Atualiza os relógios a cada segundo

