let preco = 19.99;
let desconto = 0.1;

// Usando templates literals com expresões matemáticas
let precoFinal = `O preço final do produto com desconto é ${preco * (1 - desconto)} reais.`;
console.log(precoFinal); // Saída: "O preço final do produto com desconto é 17.99 reais."