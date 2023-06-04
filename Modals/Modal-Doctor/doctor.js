const openModalDoc = document.querySelector('#btn__doctor');
const closeModalDoc = document.querySelector('.btn__close_doctor')
const submitBtnDoc = document.querySelector('.btn__submit_doctor')
const modalDoc = document.querySelector('.modal_doctor')

openModalDoc.addEventListener('click', (e)=>{
    e.preventDefault();
    modalDoc.classList.add('modal--show_doctor');
})

closeModalDoc.addEventListener('click', (e)=>{
    e.preventDefault();
    modalDoc.classList.remove('modal--show_doctor');
})

submitBtnDoc.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Se ha creado correctamente el doctor    ')
    modalDoc.classList.remove('modal--show_doctor');

})
