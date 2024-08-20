let questions = [
    {
        question: "Qual é a atividade mais comum que as pessoas fazem na areia da praia?",
        answers: [
            {option:"Nadar", correct: false },
            {option:"Fazer um churrasco", correct: false },
            {option:"Construir castelos de areia", correct: true },
            {option:"Pescar", correct: false },
            {option:"Jogar frisbee", correct: false },
        ],
    },
    {
        question: "Qual item é essencial para proteger a pele do sol na praia?",
        answers: [
            {option:"Protetor solar", correct: false },
            {option:"Água", correct: false },
            {option:"Toalha de praia", correct: false },
            {option:"Cadeira de praia", correct: false },
            {option:"Óculos de sol", correct: true },
        ],
    },
    
    {
        question: "Qual esporte aquático é popular e envolve surfar em ondas com uma prancha?",
        answers: [
            {option:"Stand-up", correct: false },
            {option:"Mergulho livre", correct: false },
            {option:"Surf", correct: true },
            {option:"Canoagem", correct: false },
            {option:"Pesca subaquática", correct: false },
        ],
    },
    
    {
        question: "Qual é o equipamento básico para quem deseja jogar vôlei na praia?",
        answers: [
            {option:"Tacos e bola", correct: false },
            {option:"Bola de basquete", correct: false },
            {option:"Rede e bola", correct: true },
            {option:"Rede de tênis", correct: false },
            {option:"Raquete de pingue-pongue", correct: false },
        ],
    },

    {
        question: "O que é típico fazer com uma câmara subaquática durante um dia de praia?",
        answers: [
            {option:"Usar para filmar esportes radicais em terra", correct: false },
            {option:"Fotografar animais marinhos", correct: true },
            {option:"Gravar vídeos de eventos ao ar livre", correct: false },
            {option:"Capturar imagens de aves", correct: false },
            {option:"Fotografar a paisagem de uma montanha", correct: false },
        ],
    },

    {
        question: "Qual é uma atividade comum em que se usa uma prancha e se desliza sobre a água?",
        answers: [
            {option:"Bodyboard", correct: true },
            {option:"Natação", correct: false },
            {option:"Hidroginástica", correct: false },
            {option:"Esqui aquático", correct: false },
            {option:"Natação sincronizada", correct: false },
        ],
    },

    {
        question: "Qual é o principal objetivo de usar um guarda-sol na praia?",
        answers: [
            {option:"Criar um espaço para jogar futebol", correct: false },
            {option:"Usar como apoio para leitura", correct: false },
            {option:"Proteger-se do sol", correct: true },
            {option:"Fornecer um ponto de encontro para amigos", correct: false },
            {option:"Criar um espaço para guardar alimentos", correct: false },
        ],
    },

    {
        question: "Qual dessas atividades não é típica de um dia de praia?",
        answers: [
            {option:"Nadar", correct: false },
            {option:"Patinação no gelo", correct: true },
            {option:"Jogar frescobol", correct: false },
            {option:"Construir castelos de areia", correct: false },
            {option:"Jogar vôlei", correct: false },
        ],
    },

    {
        question: "Qual equipamento é frequentemente usado para relaxar na praia e descansar?",
        answers: [
            {option:"Cadeira de praia", correct: true },
            {option:"Tenda de camping", correct: false },
            {option:"Equipamento de mergulho", correct: false },
            {option:"Equipamento de esqui", correct: false },
            {option:"Cadeira de escritório", correct: false },
        ],
    },

    {
        question: "Qual é uma atividade popular que envolve coletar pequenos fragmentos de conchas na praia?",
        answers: [
            {option:"Construção de castelos de areia", correct: false },
            {option:"Mergulho livre", correct: false },
            {option:"Pescaria", correct: false },
            {option:"Caça a conchas", correct: true },
            {option:"Natação", correct: false },
        ],
    },
] 
// script do quiz
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