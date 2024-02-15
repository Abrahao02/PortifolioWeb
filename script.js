
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



// JavaScript para o carrossel
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imagesContainer = document.querySelector('.images');
const images = document.querySelectorAll('.images .item');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

function updateGallery() {
    const translateValue = -currentIndex * 100; // Ajuste conforme necessário
    imagesContainer.style.transform = `translateX(${translateValue}%)`;
}

