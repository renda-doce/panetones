// Configuração do contador
  let vagas = 50;       // valor inicial
  const vagasMin = 5;   // valor final
  const intervaloMax = 5000; // tempo máximo entre decrementos (ms)

  const spanVagas = document.getElementById('vagas');

  function decrementarVagas() {
    if (vagas > vagasMin) {
      // Decremento aleatório entre 1 e 3
      const decremento = Math.floor(Math.random() * 3) + 1; 
      vagas -= decremento;
      if (vagas < vagasMin) vagas = vagasMin; // garante não passar do mínimo
      spanVagas.textContent = vagas;

      // Próximo decremento após tempo aleatório até intervaloMax
      const delay = Math.random() * intervaloMax;
      setTimeout(decrementarVagas, delay);
    }
  }

  // Inicia o contador
  decrementarVagas();