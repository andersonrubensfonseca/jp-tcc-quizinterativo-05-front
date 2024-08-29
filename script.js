function login(event) { 
    event.preventDefault()
    const form = document.getElementById('formLogin');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    fetch("http://localhost:3333/login",
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        }).then(res=>{
            if(res.ok){
                window.location='./homepage.html'
            }
        }).catch(err=>{
            console.log('error =>',err)
        })
    return false
}

function cadastro(event) {
    event.preventDefault()
    const form = document.getElementById('formcreate');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    fetch("http://localhost:3333/users",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(res=>{
        if(res.ok){
            window.location='./index.html'
        }
    }).catch(err=>{
        console.log('error =>',err)
    })
    return false
}

// function carregaquiz() {
//     // fetch("http://localhost:3333/quiz",
//     // {
//     //     headers: {
//     //     'Accept': 'application/json',
//     //     'Content-Type': 'application/json'
//     //     },
//     //     method: "GET",
//     // }).then(async res=>{
//     //     if(res.ok){
//     //        const data = await res.json()
//     //        console.log(data)
//     //     }
//     // }).catch(err=>{
//     //     console.log('error =>',err)
//     // })
//     const quizes = [
//         {title:"Conhecimentos",span:"Gerais",text:"Conhecimentos gerais é um termo utilizado para representar um aglomerado de tópicos e informações que são importantes, pertinentes e relevantes relacionados à diversas áreas. São informações que foram acumuladas ao longo do tempo através de vários meios.",url:"./quiz1.html",video:"1.mp4.mp4"}
//     ]


// } 
// carregaquiz()