document.addEventListener("DOMContentLoaded", function () {
    const publicationForm = document.querySelector(".formulario-publicar form");
    const publicationsContainer = document.getElementById("publicaciones");

    // Array para almacenar las publicaciones
    const publicaciones = [];

    publicationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = publicationForm.querySelector("#titulo").value;
        const author = publicationForm.querySelector("#autor").value;
        const content = publicationForm.querySelector("#contenido").value;

        if (title && author && content) {
            // Crear un objeto de publicación
            const publication = {
                title: title,
                author: author,
                content: content,
                likes: 0,
                date: new Date(),
            };

            // Agregar la nueva publicación al principio del array (como la más reciente)
            publicaciones.unshift(publication);

            // Limpiar y actualizar las publicaciones
            publicationForm.reset();
            displayPublications();
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    // Función para mostrar las publicaciones
    function displayPublications() {
        publicationsContainer.innerHTML = ""; // Limpiar el contenedor

        // Ordenar publicaciones por fecha (de más reciente a más antigua)
        const sortedPublications = publicaciones.sort((a, b) => b.date - a.date);

        // Recorrer y mostrar publicaciones
        sortedPublications.forEach((publication, index) => {
            const publicationDiv = document.createElement("div");
            publicationDiv.className = "publicacion";
            publicationDiv.innerHTML = `
                <h2>${publication.title}</h2>
                <p>Autor: ${publication.author}</p>
                <p>Me gusta: ${publication.likes}</p>
                <p>Fecha de publicación: ${publication.date.toDateString()}</p>
                <p>${publication.content}</p>
            `;

            const likeButton = document.createElement("button");
            likeButton.textContent = "Me gusta";
            
            likeButton.addEventListener("click", () => {
                // Incrementar los "Me gusta" cuando se hace clic en el botón
                publication.likes++;
                displayPublications(); // Actualizar las publicaciones
            });

            publicationDiv.appendChild(likeButton);

            publicationsContainer.appendChild(publicationDiv);
        });
    }

    // Mostrar las publicaciones iniciales
    displayPublications();
});
