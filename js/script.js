document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content');
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const nav = document.querySelector('.sidebar-nav');
    const headerLogo = document.querySelector('.sidebar-header');

    // Store the initial dashboard content to allow returning to it
    const initialDashboardContent = contentContainer.innerHTML;

    // --- Sidebar Menu Interactivity (Event Delegation) ---
    if (nav) {
        nav.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            if (link.classList.contains('has-submenu')) {
                e.preventDefault();
                const targetId = link.getAttribute('data-target');
                const submenu = document.getElementById(targetId);
                if (submenu) {
                    const isVisible = submenu.style.display === 'block';
                    submenu.style.display = isVisible ? 'none' : 'block';
                }
            }

            const page = link.getAttribute('data-page');
            if (page) {
                e.preventDefault();
                loadContent(page);
            }
        });
    }

    // --- Dashboard Card Clicks (Event Delegation on a static parent) ---
    contentContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.dashboard-card[data-page]');
        if (!card) return;

        const page = card.getAttribute('data-page');
        if (page) {
            loadContent(page);
        }
    });

    // --- Sidebar Collapse/Expand ---
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
    }

    // --- Return to Dashboard ---
    if (headerLogo) {
        headerLogo.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                contentContainer.innerHTML = initialDashboardContent;
            }
        });
    }

    // --- Function to Load Page Content ---
    function loadContent(page) {
        const pageTitle = page.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        let content;

        switch (page) {
            case 'contrato':
                content = `<h1>Lançamento de Contrato</h1><p>Formulário para lançamento de novos contratos.</p>`;
                break;
            case 'cadastro-colaborador':
                content = `<h1>Cadastro de Colaborador</h1><p>Formulário para cadastrar novos colaboradores.</p>`;
                break;
            case 'cliente':
                content = `<h1>Configuração de Cliente</h1><p>Formulário para configurar clientes.</p>`;
                break;
            case 'fornecedor':
                content = `<h1>Configuração de Fornecedor</h1><p>Formulário para configurar fornecedores.</p>`;
                break;
            default:
                content = `<h1>${pageTitle}</h1><p>Conteúdo da página ${pageTitle}.</p>`;
        }
        contentContainer.innerHTML = content;
    }
});