// Typed text animation для главной страницы
const text = "Ласкаво просимо до бібліотеки S1lver";
let index = 0;
const heroTitle = document.querySelector('.hero h1');

function type() {
    if(heroTitle && index < text.length) {
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 60);
    }
}

window.addEventListener('load', () => {
    if(heroTitle){
        heroTitle.innerHTML = '';
        type();
    }
    const themeBtn = document.getElementById('theme-btn');
    if(themeBtn){
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('green-theme');
        });
    }
});
