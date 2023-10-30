document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resourceLists = document.querySelectorAll(".resource-list");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === "") {
            // Si el campo de búsqueda está vacío, muestra todos los recursos.
            resourceLists.forEach(function (list) {
                showAllResources(list);
            });
        } else {
            // Si se ingresó un término de búsqueda, filtra y muestra los recursos correspondientes.
            resourceLists.forEach(function (list) {
                filterResources(list, searchTerm);
            });
        }
    });

    function filterResources(list, term) {
        list.querySelectorAll("li").forEach(function (resource) {
            const title = resource.textContent.toLowerCase();
            if (title.includes(term)) {
                resource.style.display = "list-item";
            } else {
                resource.style.display = "none";
            }
        });
    }

    function showAllResources(list) {
        list.querySelectorAll("li").forEach(function (resource) {
            resource.style.display = "list-item";
        });
    }
});
