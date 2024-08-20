let questions = [
    {
        question: "Qual planta marinha é conhecida por suas folhas longas e finas que formam vastos prados subaquáticos?",
        answers: [
            {option:"Algas vermelhas", correct: false },
            {option:"Coral cérebro", correct: false },
            {option:"Ervas marinhas", correct: true },
            {option:"Anêmonas-do-mar", correct: false },
            {option:"Lírios-d'água", correct: false },
        ],
    },
    {
        question: "Qual é o nome dado às grandes algas que crescem em águas frias e são frequentemente chamadas de 'kelp florestas'?",
        answers: [
            {option:"Algas corais", correct: false },
            {option:"Plâncton", correct: false },
            {option:"Salgas", correct: false },
            {option:"Algas vermelhas", correct: false },
            {option:"Algas pardas", correct: true },
        ],
    },
    
    {
        question: "Qual dessas algas é geralmente encontrada em águas tropicais e tem uma cor vermelho-rosada?",
        answers: [
            {option:"Algas verdes", correct: false },
            {option:"Algas marrons", correct: false },
            {option:"Algas vermelhas ", correct: true },
            {option:"Algas azuis-verdes", correct: false },
            {option:"Algas douradas", correct: false },
        ],
    },
    
    {
        question: "Qual tipo de planta marinha é conhecida por seu papel na formação de recifes de corais?",
        answers: [
            {option:"Algas marrons", correct: false },
            {option:"Lírios-do-mar", correct: false },
            {option:"Corais", correct: true },
            {option:"Plâncton", correct: false },
            {option:"Sargasso", correct: false },
        ],
    },

    {
        question: "Qual é a função principal das algas verdes nos ecossistemas marinhos?",
        answers: [
            {option:"Formar recifes de corais", correct: false },
            {option:" Produzir oxigênio através da fotossíntese ", correct: true },
            {option:"Produzir o recife de barro", correct: false },
            {option:"Servir como abrigo para peixes pelágicos", correct: false },
            {option:"Absorver poluentes químicos da água", correct: false },
        ],
    },

    {
        question: "Qual é uma característica distintiva das algas calcárias?",
        answers: [
            {option:"Elas contribuem para a formação e a manutenção dos recifes de corais", correct: true },
            {option:"Cor verde brilhante", correct: false },
            {option:"Folhas largas e flutuantes", correct: false },
            {option:"Produção de bioluminescência", correct: false },
            {option:"Crescimento em água doce", correct: false },
        ],
    },

    {
        question: "Qual é a principal diferença entre algas e plantas marinhas verdadeiras?",
        answers: [
            {option:"Cor das estruturas", correct: false },
            {option:"Tamanho das duas", correct: false },
            {option:"Algas não têm estruturas vasculares e não produzem sementes ", correct: true },
            {option:"Localização de crescimento", correct: false },
            {option:"Tipo de reprodução", correct: false },
        ],
    },

    {
        question: "Qual dessas plantas marinhas tem folhas que podem se assemelhar a grama e é comum em águas rasas?"
        ,answers: [
            {option:"Kelp", correct: false },
            {option:" Ervas marinhas", correct: true },
            {option:"Algas vermelhas", correct: false },
            {option:"Anêmonas-do-mar", correct: false },
            {option:"Lírios-do-mar", correct: false },
        ],
    },

    {
        question: "Qual planta marinha é conhecida por suas estruturas chamadas 'frondes' e é encontrada em águas profundas?",
        answers: [
            {option:"Algas pardas", correct: true },
            {option:"Grama-marinha", correct: false },
            {option:"Algas vermelhas", correct: false },
            {option:"Lírios-do-mar ", correct: false },
            {option:"Coral cérebro", correct: false },
        ],
    },

    {
        question: "Qual é a principal função das algas marinhas em um ecossistema marinho?",
        answers: [
            {option:"Produzir gás carbônico", correct: false },
            {option:"Formar recifes de corais", correct: false },
            {option:"Servir como predadores de pequenos peixe", correct: false },
            {option:" Elas fornecem alimento e abrigo para muitas espécies marinhas ", correct: true },
            {option:"Absorver nutrientes da água para formação de minerais", correct: false },
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