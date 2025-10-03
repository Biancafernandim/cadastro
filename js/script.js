document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.sidebar-nav .menu-item');
    const contentContainer = document.getElementById('content');
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    // Menu item click functionality
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            if (targetId) {
                const submenu = document.getElementById(targetId);
                if (submenu) {
                    // Toggle display of the submenu
                    if (submenu.style.display === 'block') {
                        submenu.style.display = 'none';
                    } else {
                        // Hide all other submenus before showing the new one
                        document.querySelectorAll('.submenu').forEach(otherSubmenu => {
                            otherSubmenu.style.display = 'none';
                        });
                        submenu.style.display = 'block';
                    }
                }
            }
        });
    });

    // Submenu link click to load content
    const pageLinks = document.querySelectorAll('.submenu a');
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Sidebar toggle functionality
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Function to load page content
    function loadContent(page) {
        let content = `<h1>Página ${page}</h1><p>Conteúdo da página ${page}.</p>`;

        if (page === 'contrato') {
            content = `
                <h1>Lançamento de Contrato</h1>
                <p>Formulário para lançamento de novos contratos.</p>
                <!-- Add form or other content here -->
            `;
        } else if (page === 'cadastro-colaborador') {
            content = `
                <h1>Cadastro de Colaborador</h1>
                <p>Formulário para cadastrar novos colaboradores.</p>
                <!-- Add form or other content here -->
            `;
        } else if (page === 'cliente') {
            content = `
                <h1>Configuração de Cliente</h1>
                <p>Formulário para configurar clientes.</p>
                <!-- Add form or other content here -->
            `;
        } else if (page === 'fornecedor') {
            content = `
                <h1>Configuração de Fornecedor</h1>
                <p>Formulário para configurar fornecedores.</p>
                <!-- Add form or other content here -->
            `;
        }

        contentContainer.innerHTML = content;
    }
});