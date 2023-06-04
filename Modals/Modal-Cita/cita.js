const openModalCit = document.querySelector('#btn__cita');
const closeModalCit = document.querySelector('.btn__close_cita')
const submitBtnCit = document.querySelector('.btn__submit_cita')
const modalCit = document.querySelector('.modal_cita')

openModalCit.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCit.classList.add('modal--show_cita');
})

closeModalCit.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCit.classList.remove('modal--show_cita');
})

submitBtnCit.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Se ha agendado correctamente la cita   ')
    modalCit.classList.remove('modal--show_cita');

})
