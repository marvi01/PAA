function menorStringComoSubsequencia(A, B) {
    const m = A.length;
    const n = B.length;
    
    // Crie uma matriz para armazenar os resultados dos subproblemas
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (A[i - 1] === B[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    const menorTamanho = m + n - dp[m][n];
    return menorTamanho;
  }
  
  // Leitura das strings de entrada
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Digite a string A: ', (A) => {
    rl.question('Digite a string B: ', (B) => {
     
      const resultado = menorStringComoSubsequencia(A, B);
      console.log(`O tamanho da menor string que possui ${A} e ${B} como subsequências é ${resultado}`);
      rl.close();
    });
  });
  