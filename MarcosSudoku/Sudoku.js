const fs = require('fs');


function resolve(board) {
    if (!falta(board)) {
        // Se não há mais células vazias, o Sudoku está resolvido.
        return true;
    }

    const [lin, col] = falta(board);// que falta

    for (let i = 1; i <= 9; i++) {
        if (isAceita(board, lin, col, i)) {
            // Se aceita recebe o valor
            board[lin][col] = i;

            // Tente resolver o restante do Sudoku com a atribuição atual.
            if (resolve(board)) {
                return true;
            }

            // Se a atribuição atual não levar a uma solução, desfaça-a.
            board[lin][col] = 0;
        }
    }

    // Se nenhum número válido funcionar, retorne falso para retroceder.
    return false;
}
//Verifica Celula vazia e retorna cordenadas se ouver
function falta(board) {
    for (let lin = 0; lin < 9; lin++) {
        for (let col = 0; col < 9; col++) {
            if (board[lin][col] === 0) {
                return [lin, col];
            }
        }
    }
    return null;
}

function isAceita(board, lin, col, num) {
    // Verifique se o número não está na mesma linha ou coluna.
    for (let i = 0; i < 9; i++) {
        if (board[lin][i] === num || board[i][col] === num) {
            return false;
        }
    }
    return verificaQuad(board, lin, col, num);
}

function verificaQuad(board, lin, col, num){
     // Verifique se o número não está na mesma sub-grade 3x3.
    let startlin = Math.floor(lin / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startlin; i < startlin + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }
    return true;
}
function printSudoku(board) {
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0 && i !== 0) {
            console.log("---------------------"); // Linha horizontal divisória
        }

        let linStr = "";
        for (let j = 0; j < 9; j++) {
            if (j % 3 == 0 && j != 0) {
                linStr += "| "; // Linha vertical divisória
            }
            if (board[i][j] == 0) {
                linStr += "  ";
            } else {
                linStr += board[i][j] + " ";
            }
        }
        console.log(linStr);
    }
}
  if (process.argv.length < 3) {
    console.error('Por favor, forneça o nome do arquivo como argumento.');
    process.exit(1);
  }

  const nomeArquivo = process.argv[2];

// Use fs.readFile para ler o arquivo
fs.readFile(nomeArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  // Dividir o conteúdo em linhas e, em seguida, dividir cada linha em números
  const linhas = data.trim().split('\n');
  const sudokuBoard = linhas.map((linha) => linha.split(' ').map(Number));

 
  printSudoku(sudokuBoard)
  let result = resolve(sudokuBoard);
  if (result) {
      console.log("Sudoku resolvido:");
      printSudoku(sudokuBoard)
  } else {
      console.log("Nenhuma solução encontrada.");
  
  }
});
 
