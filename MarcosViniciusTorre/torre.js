function torreDeHanoi(n, hasteOrigem, hasteAuxiliar, hasteDestino) {
  if (n === 1) {
    let disco = torres[hasteOrigem].pop();
    torres[hasteDestino].push(disco);
    console.log(`Mova o disco ${disco} de ${hasteOrigem} para ${hasteDestino}`);
    imprimirEstadoTorres();
    return;
  }

  torreDeHanoi(n - 1, hasteOrigem, hasteDestino, hasteAuxiliar);
  let disco = torres[hasteOrigem].pop();
  torres[hasteDestino].push(disco);
  console.log(`Mova o disco ${disco} de ${hasteOrigem} para ${hasteDestino}`);
  imprimirEstadoTorres();
  torreDeHanoi(n - 1, hasteAuxiliar, hasteOrigem, hasteDestino);
}

function imprimirEstadoTorres() {
  console.log('--- Resultado das Torres ---');
  console.log('Haste A: ' + torres['A'].join(' '));
  console.log('Haste B: ' + torres['B'].join(' '));
  console.log('Haste C: ' + torres['C'].join(' '));
  console.log('-------------------------------');
  console.log('');
}

let torres = {
  'A': [],
  'B': [],
  'C': [],
};
const quantiDiscos = process.argv[2];
console.log(quantiDiscos);
if (!isNaN(quantiDiscos)) {
  let discos = [];
  for (let index = quantiDiscos; index > 0; index--) {
    discos.push(Number(index));
  }
  console.log(discos);
  torres['A'] = [...discos]

  imprimirEstadoTorres();
  torreDeHanoi(torres['A'].length, 'A', 'B', 'C');
}




