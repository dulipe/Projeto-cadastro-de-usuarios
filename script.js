// programando o checkbox comlemento!

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

comp.addEventListener('click' , complemento)



// programando o array atraves do cadastro de usuario


const usuarios = []


function cadastrarUsuarios() {  
    const nome = document.getElementById('nome-completo').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const cep = document.getElementById('cep').value
    const rua = document.getElementById('rua').value
    const numero = document.getElementById('numero').value
    const complemento = document.getElementById('complemento').value
    const bairro = document.getElementById('bairro').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
    let alerta = ''

    if(nome === '' || email === '' || tel === '' || cep === '' || rua === '' || numero === '' || complemento === '' || bairro === '' || cidade === '' || estado === '') {
        alert('Preencha todos os dados!')
    } else{

        const usuario = {
            nome,
            email,
            tel,
            cep,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            data: new Date().toLocaleDateString(),
        }

        usuarios.push(usuario)
        render();
    }
}





//Jogando valores do array na tabela

function render() {
    const tbody = document.getElementById('tbody')
    const contador = document.getElementById('menu')
    tbody.innerHTML = ''
    contador.innerHTML = `Atualmente temos ${usuarios.length} usuarios cadastrados`
    for (let i of usuarios) {
        const pos = usuarios.indexOf(i)       
        const user = `
            <tr>
                <td>${i.nome}</td>
                <td>${i.email}</td>
                <td>${i.tel}</td>
                <td>${i.cep}</td>
                <td>${i.rua}</td>
                <td>${i.numero}</td>
                <td>${i.complemento}</td>
                <td>${i.bairro}</td>
                <td>${i.cidade}</td>
                <td>${i.estado}</td>
                <td>${i.data}</td>
                <td><button id="del" onclick="del(${pos})">Del</button></td>
            </tr>
        `
        tbody.innerHTML += user
    }
}

//função para deletar a linha da tabela

function del(pos) {
    usuarios.splice(pos, 1)
    render()
}