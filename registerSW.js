if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/ecommWebapp/sw.js', { scope: '/ecommWebapp/' })})}