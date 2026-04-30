// network-check.js
function updateOnlineStatus() {
    if (!navigator.onLine) {
        // Current page ka pura URL save karo taake wapsi sahi jagah ho
        sessionStorage.setItem('last_url', window.location.href);
        
        // "/" lagane se ye har folder se hamesha Root folder mein error page dhoonde ga
        window.location.replace("/error404.html"); 
    }
}

window.addEventListener('offline', updateOnlineStatus);

// Initial check agar page load hote hi net na ho
if (!navigator.onLine) {
    updateOnlineStatus();
}