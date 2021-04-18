if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').then(() => console.log('[sw.js] registered'))
} else {
    console.log(`service worker isn't supported in your browser`);
}

let beforeInstallPromptEvent = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    beforeInstallPromptEvent = e
})