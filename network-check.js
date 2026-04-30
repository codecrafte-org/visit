function updateOnlineStatus() {
    if (!navigator.onLine) {
        // replace use karne se user back button dabayega toh stuck nahi hoga
        window.location.replace("error404.html");
    }
}

window.addEventListener('offline', updateOnlineStatus);