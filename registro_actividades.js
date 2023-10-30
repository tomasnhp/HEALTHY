document.addEventListener("DOMContentLoaded", function () {
    const registroActividades = document.getElementById("registro-actividades");
    const btnRegistrar = document.getElementById("btn-registrar");
    const actividadesRegistradas = document.getElementById("actividades-registradas");
    const listaActividades = document.getElementById("lista-actividades");

    btnRegistrar.addEventListener("click", function () {
        const actividad = registroActividades.value;

        if (actividad.trim() !== "") {
            // Obtener la fecha actual
            const fecha = new Date();
            const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

            // Crear un nuevo elemento de lista con la actividad y la fecha
            const nuevaActividad = document.createElement("li");
            nuevaActividad.textContent = `${fechaFormateada}: ${actividad}`;

            // Agregar la nueva actividad a la lista de actividades registradas
            listaActividades.appendChild(nuevaActividad);

            // Limpiar el campo de registro
            registroActividades.value = "";
        }
    });
});
