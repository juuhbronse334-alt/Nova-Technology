// Seleciona todos os links do menu

const links = document.querySelectorAll("a[href^='#']");


// Adiciona o evento de clique

links.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destino =
            document.querySelector(
                this.getAttribute("href")
            );

        destino.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});