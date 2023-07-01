const openModal = document.querySelector('#btn__pacientes');
const closeModal = document.querySelector('.btn__close_pacientes');
const submitBtn = document.querySelector('.btn__submit_pacientes');
const modal = document.querySelector('.modal_pacientes');

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
    const nombre_paciente = document.getElementById("paciente-nombre");
    const apellido_paciente = document.getElementById("paciente-apellido");
    const sexo_paciente = document.getElementById("paciente-sexo");
    const edad_paciente = document.getElementById("paciente-edad");
    const direccion_paciente = document.getElementById("paciente-direccion");
    const telefono_paciente = document.getElementById("paciente-telefono");
    const dni_paciente = document.getElementById("paciente-dni");
    const correo_paciente = document.getElementById("paciente-correo");
    const PacientesLocal =  JSON.parse(localStorage.getItem("pacientes"));

    if(PacientesLocal == null){
        var pacientesLength = 0
    } else {
        var pacientesLength = PacientesLocal.length
    }
    

    var paciente = {
        id: pacientesLength+1,
        nombre: nombre_paciente.value,
        apellido: apellido_paciente.value,
        sexo: sexo_paciente.value,
        edad: edad_paciente.value,
        direccion: direccion_paciente.value,
        telefono: telefono_paciente.value,
        dni: dni_paciente.value,
        correo: correo_paciente.value
    } 
    setTimeout("1000", checkPaciente(paciente))
})

function checkPaciente(paciente){
     if(localStorage.getItem("pacientes")){

         var arrayPacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
         arrayPacientes.push(paciente)
         const añadirPaciente = JSON.stringify(arrayPacientes)
         localStorage.setItem("pacientes", añadirPaciente);
     } else {
         var arrayPacientes = [];
         arrayPacientes.push(paciente);
         const añadirPaciente = JSON.stringify(arrayPacientes);

         localStorage.setItem("pacientes", añadirPaciente);
         console.log(localStorage.getItem("pacientes"));
         console.log(typeof(añadirPaciente));
     }

    alert('Se ha creado correctamente el paciente')
    modal.classList.remove('modal--show_pacientes');
}
