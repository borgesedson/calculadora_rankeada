function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias e derrotas 
    let saldoVitorias = vitorias - derrotas;
    
    // Define o nível com base no número de vitórias
    let nivel;
    switch (true) {
        case (vitorias < 10):
            nivel = "Ferro";
            break;

        case (vitorias <= 20):
            nivel = "Bronze";
            break;

        case (vitorias <= 50):
            nivel = "Prata";
            break;

        case (vitorias <= 80):
            nivel = "Ouro";
            break;

        case (vitorias <= 90):
            nivel = "Diamante";
            break;

        case (vitorias <= 100):
            nivel = "Lendário";
            break;

        default:
            nivel = "Imortal";
    }
    
    // Exibe o saldo e o nível no console
    console.log("O Herói tem de saldo de " + (saldoVitorias) + " está no nível de " + (nivel) );

    // Retorna o saldo
    return saldoVitorias; 
}

// Testando a função
calcularNivel(1000, 10);  // Exemplo com saldo positivo (nível Prata)
