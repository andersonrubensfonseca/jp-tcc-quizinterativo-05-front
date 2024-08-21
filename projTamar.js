let questions = [
    {
        question: "Qual é o principal objetivo do Projeto Tamar?",
        answers: [
            {option:"Construir aquários em grandes cidades.", correct: false },
            {option:"Desenvolver produtos de beleza usando cascos de tartaruga.", correct: false },
            {option:" Conservação das tartarugas marinhas ", correct: true },
            {option:"Pesquisa sobre corais.", correct: false },
            {option:"Reabilitar tartarugas para serem mascotes de eventos esportivos.", correct: false },
        ],
    },
    {
        question: "Em que ano foi fundado o Projeto Tamar?"
        ,answers: [
            {option:"1985", correct: false },
            {option:"1992", correct: false },
            {option:"1978", correct: false },
            {option:"1990", correct: false },
            {option:"1980", correct: true },
        ],
    },
    
    {
        question: "Qual das seguintes espécies de tartarugas é o foco principal do Projeto Tamar no Brasil?",
        answers: [
            {option:"Tartaruga-de-couro", correct: false },
            {option:"Tartaruga-de-pente", correct: false },
            {option:"Tartaruga-de-pente", correct: true },
            {option:"Tartaruga-de-cabeça-de-tubarão", correct: false },
            {option:"Tartaruga-verde", correct: false },
        ],
    },
    
    {
        question: "Qual é uma das principais atividades do Projeto Tamar para proteger as tartarugas marinhas?",
        answers: [
            {option:"Cultivo de algas marinhas", correct: false },
            {option:"Criar exposições de arte com conchas de tartaruga.", correct: false },
            {option:"Monitoramento das áreas de desova ", correct: true },
            {option:"Construir centros de turismo para observação de tartarugas em áreas urbanas.", correct: false },
            {option:"Fazer plantio de árvores para tartarugas em regiões montanhosas.", correct: false },
        ],
    },

    {
        question: "Qual desses locais no Brasil é um dos centros de atuação do Projeto Tamar?",
        answers: [
            {option:"Ilha do Cardoso", correct: false },
            {option:"Praia do Forte", correct: true },
            {option:"Serra Gaúcha", correct: false },
            {option:"Pantanal", correct: false },
            {option:"Amazônia", correct: false },
        ],
    },

    {
        question: "O Projeto Tamar é uma iniciativa de que tipo de organização?",
        answers: [
            {option:"Organização não governamental", correct: true },
            {option:"Uma organização política.", correct: false },
            {option:"Uma empresa de turismo.", correct: false },
            {option:"Empresa privad", correct: false },
            {option:"Uma rede de restaurantes.", correct: false },
        ],
    },

    {
        question: "Qual das seguintes ações o Projeto Tamar realiza para educar o público?",
        answers: [
            {option:"Realizar desfiles de moda com estampas de tartaruga.", correct: false },
            {option:"Organizar feiras de culinária com pratos de tartaruga.", correct: false },
            {option:"Programas de sensibilização e visitas guiadas", correct: true },
            {option:"Exibições de filmes marinhos", correct: false },
            {option:"Construir estátuas de tartarugas em shoppings.", correct: false },
        ],
    },

    {
        question: "O Projeto Tamar também se preocupa com a pesca. Qual é uma de suas estratégias para minimizar o impacto da pesca nas tartarugas?",
        answers: [
            {option:"Desenvolver tecnologia para que tartarugas sejam capturadas e soltas sem ferimentos.", correct: false },
            {option:"Treinamento de pescadores para o uso de dispositivos de captura seletiva", correct: true },
            {option:"Implementar programas de conscientização para que os pescadores usem equipamentos de proteção para tartarugas.", correct: false },
            {option:"Construir áreas de desova artificiais para desviar tartarugas da pesca comercial.", correct: false },
            {option:"Criação de áreas de pesca exclusivas para tartarugas", correct: false },
        ],
    },

    {
        question: "Qual é um dos maiores desafios enfrentados pelo Projeto Tamar na conservação das tartarugas?",
        answers: [
            {option:"A poluição e a destruição de habitats", correct: true },
            {option:"A falta de interesse das tartarugas em se reproduzir.", correct: false },
            {option:"A competição com outras organizações de conservação por recursos.", correct: false },
            {option:"A dificuldade em encontrar voluntários para trabalhar nas praias.", correct: false },
            {option:"A resistência dos turistas em pagar taxas de entrada nas áreas protegidas.", correct: false },
        ],
    },

    {
        question: "O Projeto Tamar realiza pesquisas sobre as tartarugas marinhas. Qual desses aspectos é uma área de estudo importante?",
        answers: [
            {option:"A eficiência das tartarugas como predadores de peixes comerciais.", correct: false },
            {option:"Os padrões de navegação das tartarugas em ambientes urbanos.", correct: false },
            {option:"Os efeitos de diferentes tipos de plásticos na cor das tartarugas.", correct: false },
            {option:"Comportamento de desova e migração ", correct: true },
            {option:"A influência das tartarugas na polinização de plantas marinhas.", correct: false },
        ],
    },
]
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");


let currentIndex = 0;
let questionsCorrect = 0;
btnRestart.onclick = () => {

    content.style.display ="flex";
    contentFinish.style.display ="none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
}

function nextQuestion(e,id) {
    let item = document.getElementById(id)
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
        item.classList.add('correct')
    }else{
        item.classList.add('erro')
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        setTimeout(()=>{
            loadQuestion();
        },800)
    } else {
        finish();
    } 
}

function finish() {
    textFinish.innerHTML =`você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer,idx) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button id="answer${idx}" class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button> 
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", (e)=> nextQuestion(e,item.id));
    });
}

loadQuestion();