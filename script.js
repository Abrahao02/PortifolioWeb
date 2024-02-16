// JavaScript para o carrossel
var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    on: {
        init: function () {
            this.slides.forEach(slide => {
                slide.style.overflow = 'hidden';
            });
        },
    },
  });


// NAVEGACAO SUAVE
document.addEventListener("DOMContentLoaded", function() {
    // Obtém todos os links da barra de navegação
    const links = document.querySelectorAll("#nav ul li a");

    // Itera sobre cada link
    links.forEach(link => {
        // Adiciona um listener de evento de clique a cada link
        link.addEventListener("click", function(event) {
            // Previne o comportamento padrão do link (navegação para outra página)
            event.preventDefault();

            // Obtém o valor do atributo href do link
            const targetId = link.getAttribute("href");

            // Obtém a seção alvo com base no ID
            const targetSection = document.querySelector(targetId);

            // Verifica se a seção alvo foi encontrada
            if (targetSection) {
                // Calcula a posição vertical da seção alvo
                const targetOffset = targetSection.offsetTop;

                // Rola a página até a posição da seção alvo
                window.scrollTo({
                    top: targetOffset,
                    behavior: "smooth" // Rola suavemente
                });
            }
        });
    });
});


// APARECE INFO PESSOAIS 
document.addEventListener("DOMContentLoaded", function() {
    const iconContainers = document.querySelectorAll(".icon-container");

    iconContainers.forEach(container => {
        const icon = container.querySelector("i");
        const info = container.querySelector("p") || container.querySelector("span");

        // Adiciona um ouvinte de evento de clique ao ícone para exibir o texto
        icon.addEventListener("click", function() {
            // Exibe as informações
            toggleInfoDisplay(info);
        });
    });

    function toggleInfoDisplay(info) {
        // Alterna o estilo de exibição das informações entre "inline" e "none"
        info.style.display = info.style.display === "none" ? "inline" : "none";
    }
});






