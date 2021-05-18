// configurando o checkbox comlemento!

const comp = document.getElementById('comp')
const input = document.getElementById('complemento')

function complemento() {
    if(comp.checked == true) {
               
        input.removeAttribute('hidden')
        input.setAttribute('required', 'required')
        
    } else {
        input.removeAttribute('required') 
        input.setAttribute('hidden', 'hidden')
    }
}

comp.addEventListener('change' , complemento)