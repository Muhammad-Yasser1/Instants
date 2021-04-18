self.addEventListener('install', (e) => {
    console.log('[sw.js] installing', e);
})

self.addEventListener('activate', (e) => {
    console.log('[sw.js] activating', e);
    return self.clients.claim()
})

self.addEventListener('fetch', (e) => { })
