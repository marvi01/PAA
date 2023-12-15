const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarMaiorPremio(N, D, numero) {
  const pilha = [];
  
  for (let digito of numero) {
    while (D > 0 && pilha.length > 0 && parseInt(pilha[pilha.length - 1]) < parseInt(digito)) {
      pilha.pop();
      D--;
    }
    if (pilha.length < N - D) {
      pilha.push(digito);
    }
  }

  return pilha.join('');
}

function processarCasos() {
console.log('--------')
console.log("Digite 0 0 para sair")
  rl.on('line', (linha) => {
    const [N, D] = linha.split(' ').map(Number);
    
    if (N === 0 && D === 0) {
      rl.close();
    } else {
      rl.once('line', (numero) => {
        const maiorPremio = encontrarMaiorPremio(N, D, numero.trim());
        console.log(maiorPremio);
        processarCasos();
      });
    }
  });
}

processarCasos();
