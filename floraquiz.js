let questions = [
    {
        question: "Qual é o maior oceano do mundo?",
        answers: [
            {option:"Oceano Atlântico", correct: false },
            {option:"Mar Vermelho", correct: false },
            {option:"Oceano Pacífico", correct: true },
            {option:"Oceano Ártico", correct: false },
            {option:"Mar Negro", correct: false },
        ],
    },
    {
        question: "O que causa as marés?",
        answers: [
            {option:"Descongelamento das geleiras", correct: false },
            {option:"Ação dos ventos sobre a superfície do mar", correct: false },
            {option:"Movimentos tectônicos das placas continentais", correct: false },
            {option:"Mudanças na pressão atmosférica", correct: false },
            {option:"Atração gravitacional da Lua e do Sol ", correct: true },
        ],
    },
    
    {
        question: "Qual é o nome dado ao processo de mistura de águas salgada e doce em estuários?",
        answers: [
            {option:"Estratificação", correct: false },
            {option:"Sedimentação", correct: false },
            {option:"Salinidade", correct: true },
            {option:"Diluição", correct: false },
            {option:"Estruturação", correct: false },
        ],
    },
    
    {
        question: "Qual é o principal gás que contribui para a acidificação dos oceanos?",
        answers: [
            {option:"Oxigênio", correct: false },
            {option:"Monóxido de carbono", correct: false },
            {option:"Dióxido de carbono", correct: true },
            {option:"Ozônio", correct: false },
            {option:"Dióxido de enxofre", correct: false },
        ],
    },

    {
        question: "Qual é a camada do oceano onde a luz solar penetra?",
        answers: [
            {option:"Zona pelágica", correct: false },
            {option:"Zona eufótica", correct: true },
            {option:"Zona batia", correct: false },
            {option:"Zona abissal", correct: false },
            {option:"Zona hipopelágica", correct: false },
        ],
    },

    {
        question: "O que é um recife de corais?",
        answers: [
            {option:"Estruturas formadas por corais e outros organismos calcários ", correct: true },
            {option:"Um tipo de planta marinha", correct: false },
            {option:"Uma camada de sedimentos acumulados em fundo marinho profundo", correct: false },
            {option:"Uma área de água doce que forma uma barreira natural", correct: false },
            {option:"Um tipo de alga marinha que cresce em águas rasas", correct: false },
        ],
    },

    {
        question: "Qual é a principal função das algas marinhas nos ecossistemas oceânicos?",
        answers: [
            {option:"Servir como habitat para organismos terrestres", correct: false },
            {option:"Absorver a poluição atmosférica", correct: false },
            {option:"Produzir oxigênio e fornecer alimento", correct: true },
            {option:"Regular a temperatura da água do mar", correct: false },
            {option:"Atuar como filtro de poluentes químicos na água", correct: false },
        ],
    },

    {
        question: "Qual é o nome da camada de água que fica abaixo da zona eufótica e é caracterizada por pouca ou nenhuma luz?",
        answers: [
            {option:"Zona epipelágica", correct: false },
            {option:"Zona batial", correct: true },
            {option:" Zona intermareal", correct: false },
            {option:"Zona pelágica", correct: false },
            {option:"Zona nerítica", correct: false },
        ],
    },

    {
        question: "Qual é o principal habitat de muitas espécies de peixes comerciais, como atuns e sardinhas?",
        answers: [
            {option:"Zona nerítica", correct: true },
            {option:"Zona abissal", correct: false },
            {option:" Zona pelágica", correct: false },
            {option:" Zona intermareal", correct: false },
            {option:" Zona nerítica", correct: false },
        ],
    },

    {
        question: "Qual é a principal fonte de alimento para os organismos do fundo marinho em regiões profundas?",
        answers: [
            {option:"Corais", correct: false },
            {option:"Plâncton", correct: false },
            {option:"Algas Marinhas", correct: false },
            {option:" Detritos orgânicos que caem do oceano superior", correct: true },
            {option:"Luz solar", correct: false },
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