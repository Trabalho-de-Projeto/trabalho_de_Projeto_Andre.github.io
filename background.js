(function () {
    function mount() {
        if (document.getElementById('painel-controlo-escolar')) return;

        const container = document.createElement('div');
        container.id = 'painel-controlo-escolar';
        Object.assign(container.style, {
            position: 'fixed',
            inset: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
            color: '#111',
            zIndex: '2147483647',
            fontFamily: "system-ui, 'Segoe UI', Roboto, Arial, sans-serif",
            fontSize: '48px',
            fontWeight: '600',
            margin: '0',
            padding: '0',
            textAlign: 'center'
        });

        container.textContent = 'Painel de controlo Escolar';
        document.body.appendChild(container);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount);
    } else {
        mount();
    }
})();