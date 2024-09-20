const caixaPrincipal = document.querySeletor(".caixa-principal");
const caixaPerguntas = document.querySeletor(".caixa-pergunta");
const caixaAlternativas = document.querySeletor(".caixa-alternativas");
const caixaResultado = document.querySeletor(".caixa-resultado");
const textoResultado = document.querySeletor(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
    {
    enunciado: "Qual a raça de cachorro que possui orelhas longas e corpo comprido?",
    alternativas: [
        "Chihauhua",
        "Dachshund"
    ],
    correta: 1 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que é de porte pequeno e são conhecidos por sua agrecividade?",
    alternativas: [
        "Pinscher",
        "Pug"
    ],
    correta: 0 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que possui uma certa dificuldade em sua respiração, devido seu focinho achatado?",
    alternativas: [
        "Pug",
        "Shih-tzu"
    ],
    correta: 0 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que são guias de pessoas com deficiencia visual?",
    alternativas: [
        "Rottwelier",
        "Golden"
    ],
    correta: 1 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que são considerados pelos antepassados ótimos caçadores?",
    alternativas: [
        "Perdigueiro Português",
        "Terrier Brasileiro"
    ],
    correta: 0 // A primeira alternativa é a correta
    },
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    // Cria botões para as alternativas
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

function verificarResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;
    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaPrincipal.style.display = 'none'; // Esconde a caixa de perguntas
    caixaResultado.style.display = 'block'; // Mostra a caixa de resultado
    setTimeout(() => caixaResultado.classList.add('mostrar'), 10); // Adiciona classe para animação
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = 'Reiniciar';
    botaoReiniciar.addEventListener('click', () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove('mostrar');
        caixaResultado.style.display = 'none';
        caixaPrincipal.style.display = 'block';
        mostrarPergunta();
    });
    caixaResultado.innerHTML = ''; // Limpa conteúdo anterior
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializa a primeira pergunta
mostrarPergunta();


