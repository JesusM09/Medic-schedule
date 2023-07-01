// Obtener el array de citas desde el local storage
const citas = JSON.parse(localStorage.getItem("citas"));

// Iterar sobre cada objeto dentro del array de citas
citas.forEach(cita => {
    // Crear un elemento div con la clase "cita-card"
    const citaCard = document.createElement("div");
    citaCard.classList.add("cita-card");

    // Crear un elemento div con la clase "cita-fecha" y establecer el atributo fecha y hora
    const citaFecha = document.createElement("h3");
    citaFecha.classList.add("cita-fecha");
    citaFecha.textContent ="Fecha: " + cita.fecha + " Hora: " + cita.hora;

    // Crear un elemento div con la clase "cita-contenido"
    const citaContenido = document.createElement("div");
    citaContenido.classList.add("cita-contenido");

    // Crear un elemento div con la clase "cita-detalle"
    const citaDetalle = document.createElement("div");
    citaDetalle.classList.add("cita-detalle");

    // Crear un elemento p y establecer el texto "Cita {id de la cita}"
    const citaTitulo = document.createElement("h1");
    citaTitulo.textContent = "Cita " + cita.id;

    // Crear un elemento div con la clase "span container"
    const spanContainer = document.createElement("div");
    spanContainer.classList.add("span-container");

    // Crear un elemento span con la clase "span-cita" y establecer el atributo paciente
    const citaPaciente = document.createElement("span");
    citaPaciente.classList.add("span-cita");
    citaPaciente.textContent = "Paciente: " + cita.paciente;

    const citaDoctor = document.createElement("span");
    citaDoctor.classList.add("span-cita");
    citaDoctor.textContent = "Doctor: " + cita.doctor;

    const spanContainer2 = document.createElement("div");
    spanContainer2.classList.add("span-container-2");

    const citaCosto = document.createElement("span");
    citaCosto.classList.add("span-cita");
    citaCosto.textContent = "Costo: " + cita.costo;

    const citaMetodoPago = document.createElement("span");
    citaMetodoPago.classList.add("span-cita");
    citaMetodoPago.textContent = "Método de Pago: " + cita.metodoPago;

    const citaDescripcion = document.createElement("h5");
    citaDescripcion.textContent = "Descripción: " + cita.descripcion;
    citaDescripcion.classList.add("p-cita-descripcion");

    spanContainer.appendChild(citaPaciente);
    spanContainer.appendChild(citaDoctor);

    spanContainer2.appendChild(citaMetodoPago);
    spanContainer2.appendChild(citaCosto);

    citaDetalle.appendChild(citaFecha);
    citaDetalle.appendChild(spanContainer);
    citaDetalle.appendChild(spanContainer2);
    citaDetalle.appendChild(citaDescripcion);

    citaContenido.appendChild(citaDetalle);

    citaCard.appendChild(citaTitulo);
    citaCard.appendChild(citaContenido);

    const contenedorCitas = document.getElementById("citas-container");
    contenedorCitas.appendChild(citaCard);
});