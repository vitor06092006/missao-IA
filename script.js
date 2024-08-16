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
    correta: 0 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que é de porte pequeno e são conhecidos por sua agrecividade?",
    alternativas: [
        "Pinscher",
        "Pug"
    ],
    correta: 1 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que possui uma certa dificuldade em sua respiração, devido seu focinho achatado?",
    alternativas: [
        "Pug",
        "Shih-tzu"
    ],
    correta: 1 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que são guias de pessoas com deficiencia visual?",
    alternativas: [
        "Rottwelier",
        "Golden"
    ],
    correta: 0 // A primeira alternativa é a correta
    },
    {
    enunciado: "Qual a raça de cachorro que são considerados pelos antepassados ótimos caçadores?",
    alternativas: [
        "Perdigueiro Português",
        "Terrier Brasileiro"
    ],
    correta: 1 // A primeira alternativa é a correta
    },
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function montraPergunta() 


