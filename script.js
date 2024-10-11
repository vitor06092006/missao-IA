const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual a raça de cachorro que possui orelhas longas e corpo comprido?",
        alternativas: ["Chihauhua", "Dachshund"],
        correta: 1,
    },
    {
        enunciado: "Qual a raça de cachorro que é de porte pequeno e são conhecidos por sua agressividade?",
        alternativas: ["Pinscher", "Pug"],
        correta: 0,
    },
    {
        enunciado: "Qual a raça de cachorro que possui uma certa dificuldade em sua respiração, devido seu focinho achatado?",
        alternativas: ["Pug", "Shih-tzu"],
        correta: 0,
    },
    {
        enunciado: "Qual a raça de cachorro que são guias de pessoas com deficiência visual?",
        alternativas: ["Rottweiller", "Golden"],
        correta: 1,
    },
    {
        enunciado: "Qual a raça de cachorro que são considerados pelos antepassados ótimos caçadores?",
        alternativas: ["Perdigueiro Português", "Terrier Brasileiro"],
        correta: 0,
    },
];

let atual = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificarResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

function verificarResposta(selecionada) {
    if (selecionada === perguntas[atual].correta) {
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
    setTimeout(() => caixaResultado.classList.add('mostrar'), 10); // Animação
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


