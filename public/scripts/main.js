import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener("click", handleClick)
})

// Quando clicado abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete');

deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false));
})

function handleClick(event, check = true){
    event.preventDefault();
    const text = check ? 'Marcar como lida' : 'Excluir';
    const slug = check ? 'check' : 'delete';

    const roomId = document.querySelector('#room-id').dataset.id;
    const questionId = event.target.dataset.id //O event pega todas as propriedades do elemento que foi clicado, então para acessar o Id basta utilizar event.target.dataset.id -> Essa é outra forma de escrever
        
    //Pegando o form e atribuindo o Action que vai ser passado no HTML
    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = text;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
    //Abrir a modal
    modal.open()
}