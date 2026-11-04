(() => {
    const button = document.querySelector('.avatar-toggle');
    const alternate = button?.querySelector('.avatar-alternate');
    if (!button || !alternate) return;

    // Keep the portrait visible until the alternate image is ready to paint.
    alternate.decode().then(() => {
        button.disabled = false;
    }).catch(() => {
        button.title = 'Jingyuan Huang';
    });

    button.addEventListener('click', () => {
        const showingAlternate = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', String(!showingAlternate));
    });
})();
