const openModalCit = document.querySelector('#btn__cita');
const closeModalCit = document.querySelector('.btn__close_cita');
const submitBtnCit = document.querySelector('.btn__submit_cita');
const modalCit = document.querySelector('.modal_cita');


openModalCit.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCit.classList.add('modal--show_cita');
    getSelects()
})

closeModalCit.addEventListener('click', (e)=>{
    e.preventDefault();
    modalCit.classList.remove('modal--show_cita');
})

submitBtnCit.addEventListener('click', (e)=>{

    e.preventDefault();
    
    var selectPacientes = document.getElementById('cita-paciente');
    var selectDoctores = document.getElementById('cita-doctor');
    const selectMetodoPago = document.getElementById("cita-metodo-pago");
    const cita_fecha = document.getElementById("cita-fecha");
    const cita_costo = document.getElementById("cita-costo");
    const cita_hora = document.getElementById("cita-hora");
    const cita_descripcion = document.getElementById("cita-descripcion").value;
    const CitasLocal =  JSON.parse(localStorage.getItem("citas"));

    if(CitasLocal == null){
        var citasLength = 0
    } else {
        var citasLength = CitasLocal.length
    }

    var cita = {
        id: citasLength+1,
        paciente: selectPacientes.value,
        doctor: selectDoctores.value,
        metodoPago: selectMetodoPago.value,
        fecha: cita_fecha.value,
        costo: cita_costo.value,
        hora: cita_hora.value,
        descripcion: cita_descripcion,
    } 


    modalCit.classList.remove('modal--show_cita');
    checkCita(cita)
})

function checkCita(cita){
    if(localStorage.getItem("citas")){

        var arrayCitas = JSON.parse(localStorage.getItem("citas")) || [];
        arrayCitas.push(cita)
        const añadirCita = JSON.stringify(arrayCitas)
        localStorage.setItem("citas", añadirCita);

    } else {
        var arrayCitas = [];
        arrayCitas.push(cita);
        const añadirCita = JSON.stringify(arrayCitas);

        localStorage.setItem("citas", añadirCita);
        console.log(localStorage.getItem("citas"));
        console.log(typeof(añadirCita));
    }

   alert('Se ha creado correctamente la cita')
   modal.classList.remove('modal--show_cita');
}

function getSelects() {
    var selectPacientes = document.getElementById('cita-paciente');
    var selectDoctores = document.getElementById('cita-doctor');

    var pacientes = JSON.parse(localStorage.getItem("pacientes"));

    pacientes.forEach(function(paciente) {
        var option = document.createElement("option");
        option.value = paciente.nombre + " " + paciente.apellido;
        option.textContent = paciente.nombre + " " + paciente.apellido;
        selectPacientes.appendChild(option);
      });


    var doctores = JSON.parse(localStorage.getItem("doctores"));
    doctores.forEach(function(doctor) {
        var option = document.createElement("option");
        option.value = doctor.nombre + " " + doctor.apellido;
        option.textContent = doctor.nombre + " " + doctor.apellido;
        selectDoctores.appendChild(option);
      });
}