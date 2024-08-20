let questions = [
    {
        question: "O que é essencial para proteger os habitats marinhos contra a destruição?",
        answers: [
            {option:"Expansão da mineração submarina", correct: false },
            {option:"Aumento da poluição por resíduos industriais", correct: false },
            {option:"Estabelecer e respeitar áreas marinhas protegidas ", correct: true },
            {option:"Desregulamentação das práticas pesqueiras", correct: false },
            {option:"Construção de infraestruturas costeiras sem planejamento ambiental", correct: false },
        ],
    },
    {
        question: "Qual é uma maneira simples de contribuir para a conservação do mar durante atividades na praia?"
        ,answers: [
            {option:"Deixar lixo na areia", correct: false },
            {option:"Usar produtos químicos ao nadar", correct: false },
            {option:"Desrespeitar as zonas de proteção ambiental ", correct: false },
            {option:"Ignorar a sinalização sobre fauna e flora", correct: false },
            {option:"Levar todo o lixo embora e não deixar resíduos na praia ", correct: true },
        ],
    },
    
    {
        question: "Qual é a importância das áreas marinhas protegidas para a conservação?",
        answers: [
            {option:"Facilitar a pesca comercial desregulada", correct: false },
            {option:"Promover a poluição das águas", correct: false },
            {option:"Elas ajudam a preservar ecossistemas e espécies ameaçadas", correct: true },
            {option:"Destruir habitats críticos para espécies marinhas", correct: false },
            {option:"Permitir a construção de infraestruturas pesadas ", correct: false },
        ],
    },
    
    {
        question: "Por que devemos evitar o uso de produtos químicos nocivos perto dos ambientes marinhos?",
        answers: [
            {option:"Para aumentar a poluição dos oceanos", correct: false },
            {option:"Para promover o crescimento de algas invasivas", correct: false },
            {option:"Para reduzir a poluição da água e proteger a vida marinha", correct: true },
            {option:"Para enfraquecer a biodiversidade marinha", correct: false },
            {option:"Para melhorar a qualidade da água", correct: false },
        ],
    },

    {
        question: "Qual é um benefício da educação ambiental para a conservação dos oceanos?",
        answers: [
            {option:"Aumentar a poluição marinha", correct: false },
            {option:" Ela conscientiza e incentiva a proteção dos ambientes marinhos", correct: true },
            {option:"Desencorajar a participação em práticas sustentáveis ", correct: false },
            {option:"Promover a exploração irresponsável dos recursos marinhos", correct: false },
            {option:"Ignorar a importância dos ecossistemas marinhos ", correct: false },
        ],
    },

    {
        question: "Qual é uma das principais razões para a conservação das tartarugas marinhas?",
        answers: [
            {option:"Elas ajudam a manter o equilíbrio ecológico dos recifes de corais ", correct: true },
            {option:"Aumentar a poluição marinha", correct: false },
            {option:"Promover a pesca comercial", correct: false },
            {option:"Elas são uma fonte importante de alimento para os tubarõe", correct: false },
            {option:"Reduzir a biodiversidade marinha", correct: false },
        ],
    },

    {
        question: "O que deve ser feito para reduzir a poluição marinha causada por plásticos?",
        answers: [
            {option:"Aumentar o uso de plásticos descartáveis", correct: false },
            {option:"Descarregar resíduos plásticos diretamente no oceano", correct: false },
            {option:"Evitar o uso de produtos descartáveis e reciclar corretamente", correct: true },
            {option:"Permitir que plásticos sejam jogados em qualquer lugar", correct: false },
            {option:"Ignorar regulamentações ambientais sobre plásticos", correct: false },
        ],
    },

    {
        question: "Qual é uma prática sustentável para proteger os habitats marinhos?",
        answers: [
            {option:"Desenvolver mais áreas urbanas em zonas costeiras ", correct: false },
            {option:"Praticar a pesca sustentável e respeitar as áreas de proteção", correct: true },
            {option:"Aumentar a pesca industrial sem regulamentação", correct: false },
            {option:"Descartar resíduos tóxicos diretamente no oceano", correct: false },
            {option:"Expandir a exploração de petróleo e gás em áreas marinhas", correct: false },
        ],
    },

    {
        question: "Por que é importante reduzir a emissão de carbono para a saúde dos oceanos?",
        answers: [
            {option:"Para prevenir a acidificação dos oceanos e proteger os corais", correct: true },
            {option:"Aumenta a temperatura dos oceanos ", correct: false },
            {option:"Promove o crescimento de algas invasivas", correct: false },
            {option:"Reduz a quantidade de oxigênio na água", correct: false },
            {option:"Desestabiliza os ecossistemas marinhos ", correct: false },
        ],
    },

    {
        question: "Qual é uma maneira eficaz de ajudar a conservar os recifes de corais?",
        answers: [
            {option:"Ignorar regulamentações sobre pesca", correct: false },
            {option:"Utilizar produtos químicos prejudiciais em áreas costeiras", correct: false },
            {option:"Destruir habitats marinhos próximos", correct: false },
            {option:"Evitar tocar e pisar nos corais ao praticar atividades subaquáticas", correct: true },
            {option:"Aumentar o turismo não regulamentado", correct: false },
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