// Criar elementos dinamicamente
window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    
    // Criar título
    const titulo = document.createElement('h1');
    titulo.className = 'title-text';
    titulo.textContent = '404 - Página não encontrada';
    
    // Criar parágrafo
    const paragrafo = document.createElement('p');
    paragrafo.className = 'subtitle-text';
    paragrafo.textContent = 'Desculpe, mas a página que procura não existe!';
    
    // Adicionar ao body
    body.appendChild(titulo);
    body.appendChild(paragrafo);
});