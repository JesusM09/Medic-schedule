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
    modalDoc.classList.remove('modal--show_doctor');

    
    const nombre_doctor = document.getElementById("doctor-nombre");
    const apellido_doctor = document.getElementById("doctor-apellido");
    const sexo_doctor = document.getElementById("doctor-sexo");
    const edad_doctor = document.getElementById("doctor-edad");
    const direccion_doctor = document.getElementById("doctor-direccion");
    const telefono_doctor = document.getElementById("doctor-telefono");
    const cmp_doctor = document.getElementById("doctor-cmp");
    const especialidad_doctor = document.getElementById("doctor-especialidad");
    const DoctoresLocal =  JSON.parse(localStorage.getItem("doctores"));

    if(DoctoresLocal == null){
        var doctoresLength = 0
    } else {
        var doctoresLength = DoctoresLocal.length
    }

    var doctor = {
        id: doctoresLength+1,
        nombre: nombre_doctor.value,
        apellido: apellido_doctor.value,
        sexo: sexo_doctor.value,
        edad: edad_doctor.value,
        direccion: direccion_doctor.value,
        telefono: telefono_doctor.value,
        dni: cmp_doctor.value,
        especialidad: especialidad_doctor.value
    } 

    setTimeout("1000", checkDoctor(doctor))
})


function checkDoctor(doctor){
    if(localStorage.getItem("doctores")){

        var arrayDoctores = JSON.parse(localStorage.getItem("doctores")) || [];
        arrayDoctores.push(doctor)
        const añadirDoctor = JSON.stringify(arrayDoctores)
        localStorage.setItem("doctores", añadirDoctor);

    } else {
        var arrayDoctores = [];
        arrayDoctores.push(doctor);
        const añadirDoctor = JSON.stringify(arrayDoctores);

        localStorage.setItem("doctores", añadirDoctor);
        console.log(localStorage.getItem("doctores"));
        console.log(typeof(añadirDoctor));
    }

   alert('Se ha creado correctamente el doctor')
   modal.classList.remove('modal--show_doctores');
}