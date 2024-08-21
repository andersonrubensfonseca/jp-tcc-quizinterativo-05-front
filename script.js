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