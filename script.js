
    var res = document.querySelector('.res')
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

res.innerHTML = `${hora}:${min}:${sec} - same time`




const input_cep = document.querySelector('#cep')
const endereço = document.querySelector('#endereço')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')

cep.addEventListener('blur', () => {
    
    let cep = input_cep.value;

    if (cep.length !== 8) { /*(!) = for difente de 8 ele vai retornar*/
        alert('[ERROR] CEP Invalido')
    }


    fetch(`https://viacep.com.br/ws/${cep}/json/`)/*REQUISIÇÃO HTTP*/
       .then(response => response.json())
       .then(json => {

           cep.value = json.cep;
           endereço.value = json.logradouro;
           bairro.value = json.bairro;
           cidade.value = json.localidade;
       });
       
       
 
})

/*Alteração de cor */
const noturno = document.querySelector('#modo-noturno')
const cor = document.querySelector('body')


noturno.onclick = function() {
    const modo = noturno.checked ? 'dark' : 'light'
    cor.setAttribute("data-bs-theme",modo)
    
}

