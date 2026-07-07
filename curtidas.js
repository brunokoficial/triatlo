document.addEventListener('DOMContentLoaded', () => {
    // Cria o botão automaticamente
    const likeContainer = document.createElement('div');
    likeContainer.className = 'like-container';
    likeContainer.innerHTML = `
        <span class="like-count" id="countDisplay">0</span>
        <button class="like-button" id="likeBtn">👍</button>
    `;
    document.body.appendChild(likeContainer);

    const likeBtn = document.getElementById('likeBtn');
    const countDisplay = document.getElementById('countDisplay');

    // Recupera o total salvo no navegador
    let totalLikes = parseInt(localStorage.getItem('totalLikes')) || 0;
    countDisplay.textContent = totalLikes;

    // Verifica se já curtiu nesta sessão
    if (sessionStorage.getItem('curtiu')) {
        likeBtn.disabled = true;
        likeBtn.style.opacity = '0.5';
    }

    likeBtn.addEventListener('click', () => {
        if (!sessionStorage.getItem('curtiu')) {
            totalLikes++;
            localStorage.setItem('totalLikes', totalLikes);
            sessionStorage.setItem('curtiu', 'true');
            countDisplay.textContent = totalLikes;
            likeBtn.disabled = true;
            likeBtn.style.opacity = '0.5';
        }
    });
});
