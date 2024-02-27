// JavaScript para o carrossel projetos 
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // Adiciona um ouvinte de evento para o botão de próxima imagem
    document.querySelector('.swiper-button-next').addEventListener('click', function() {
        swiper.slideNext(); // Navega para a próxima foto
        updateProjectInfo(swiper.realIndex); // Atualiza as informações do projeto
    });

    // Adiciona um ouvinte de evento para o botão de imagem anterior
    document.querySelector('.swiper-button-prev').addEventListener('click', function() {
        swiper.slidePrev(); // Navega para a foto anterior
        updateProjectInfo(swiper.realIndex); // Atualiza as informações do projeto
    });

    // Seleciona todos os títulos (h3) com a classe 'project-title' e adiciona um ouvinte de evento de clique para cada um
    var projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(function(title, index) {
        title.addEventListener('click', function() {
            swiper.slideTo(index); // Navega para o slide associado ao título clicado
            updateProjectInfo(index); // Atualiza as informações do projeto
        });
    });

    // Atualiza as informações do projeto com base no slide atual
    function updateProjectInfo(activeIndex) {
        var projectInfoContainers = document.querySelectorAll('.project-info'); // Seleciona todos os contêineres de informações do projeto

        // Oculta todos os contêineres de informações do projeto
        projectInfoContainers.forEach(function(container) {
            container.style.display = 'none';
        });

        // Exibe o contêiner de informações do projeto correspondente ao slide atual
        var currentProjectInfoContainer = projectInfoContainers[activeIndex];
        if (currentProjectInfoContainer) {
            currentProjectInfoContainer.style.display = 'block';
        }
    }
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


// APARECE INFO PESSOAIS NOS ICONS
document.addEventListener("DOMContentLoaded", function() {
    const iconContainers = document.querySelectorAll(".icon-container");

    iconContainers.forEach(container => {
        const icon = container.querySelector("i");
        const info = container.querySelector("span");

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







