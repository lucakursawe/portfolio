
let currentLanguage = 'en'; // default 
 
function toggleDarkMode() { //darkmode toggle
    document.body.classList.toggle('dark-mode');
}

function toggleLanguage() {
    // Toggle between 'en' and 'de'
    currentLanguage = (currentLanguage === 'en') ? 'de' : 'en';
    
    // Update all elements with the class "lang"
    document.querySelectorAll('.lang').forEach(el => {
        const newText = el.getAttribute('data-lang-' + currentLanguage);
        if (newText) {
            el.innerHTML = newText;
        }
    });

    // Update button text to opposite option
    const toggleBtn = document.querySelector('.toggle-language');
    toggleBtn.innerText = (currentLanguage === 'en') ? 'Switch to German' : 'Switch to English';
}
