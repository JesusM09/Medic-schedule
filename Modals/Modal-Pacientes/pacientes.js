const openModal = document.querySelector('#btn__pacientes');
const closeModal = document.querySelector('.btn__close_pacientes')
const submitBtn = document.querySelector('.btn__submit_pacientes')
const modal = document.querySelector('.modal_pacientes')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show_pacientes');
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show_pacientes');
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Se ha creado correctamente el usuario    ')
    modal.classList.remove('modal--show_pacientes');

})
