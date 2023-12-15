function findMaxSubarray(arr) {
  // Caso base: se o array tem apenas um elemento, retorne esse elemento.
  if (arr.length === 1) {
    return arr[0];
  }

  // Encontre o índice do meio do array.
  const mid = Math.floor(arr.length / 2);

  // Divida o array em duas metades: esquerda e direita.
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursivamente, encontre o máximo subarray das duas metades.
  const maxLeft = findMaxSubarray(leftHalf);
  const maxRight = findMaxSubarray(rightHalf);

  // Encontre o máximo subarray que cruza o meio.
  const maxCrossing = findMaxCrossingSubarray(arr, mid);

  // Retorne o máximo entre os três resultados.
  return Math.max(maxLeft, maxRight, maxCrossing);
}

function findMaxCrossingSubarray(arr, mid) {
  let leftSum = -Infinity;
  let sum = 0;

  // Encontre a maior soma à esquerda do meio.
  for (let i = mid; i >= 0; i--) {
    sum += arr[i];
    leftSum = Math.max(leftSum, sum);
  }

  let rightSum = -Infinity;
  sum = 0;

  // Encontre a maior soma à direita do meio.
  for (let i = mid + 1; i < arr.length; i++) {
    sum += arr[i];
    rightSum = Math.max(rightSum, sum);
  }

  // Retorne a soma das duas partes (esquerda e direita).
  return leftSum + rightSum;
}

// Exemplo de uso:
// [];
const args = process.argv.slice(2);

// Converte os argumentos para números
const array = args.map(arg => parseInt(arg));
const maxSubarraySum = findMaxSubarray(array);
console.log("Maior soma do subarray contíguo:", maxSubarraySum);
