document.addEventListener("DOMContentLoaded", () => {
    const btnComprar = document.getElementById("btnComprar");
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    // funcion de compra 
    btnComprar.addEventListener("click", () => {
        btnComprar.classList.add("loading");
        btnComprar.textContent = "Agregando...";

        setTimeout(() => {
            btnComprar.classList.remove("loading");
            btnComprar.textContent = "Agregado";
            btnComprar.style.background = "#198754";

            setTimeout(() => {
                alert("Producto agregado al carrito");
                btnComprar.textContent = "Comprar";
                btnComprar.style.background = "#ff7a00";
            }, 500);
        }, 1000); // Simula la carga
    });

    // busqueda funcional
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando: "${query}" - (Funcionalidad simulada)`);
            //En eta parte podria agregar alguna appi para poder encontrar el producto que se busca
        } else {
            alert("Ingresa algun termino para la busqueda");
        }
    });

    // enter para proceder a buscar lo que se pide
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });
});