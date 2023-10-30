// Obtener una referencia a la tabla y a los elementos de búsqueda
const historialTable = document.querySelector(".historial-table tbody");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Función para buscar historiales por DNI
function buscarPorDNI() {
    const dniBuscado = searchInput.value.trim().toLowerCase();

    // Recorrer las filas de la tabla y ocultar/mostrar según el DNI
    Array.from(historialTable.children).forEach((row) => {
        const dni = row.children[0].textContent.toLowerCase();
        if (dni.includes(dniBuscado)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Agregar un evento al botón de búsqueda
searchButton.addEventListener("click", buscarPorDNI);

// Función para eliminar un historial por ID
function eliminarHistorial(id) {
    // Realiza acciones para eliminar el historial con el ID proporcionado
    // Puedes usar AJAX u otra lógica según tu aplicación
    alert(`Historial con ID ${id} eliminado.`);
}

// Agregar un evento de clic a los botones "Eliminar"
historialTable.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const row = event.target.closest("tr");
        const id = row.children[0].textContent;
        eliminarHistorial(id);
        row.remove();
    }
});
