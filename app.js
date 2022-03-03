const CLOSE = document.querySelector(".close");
const OPEN = document.querySelector(".open");

CLOSE.addEventListener('click', function() {
    if (OPEN.classList.contains('open')) {
        OPEN.classList.add('active');
        CLOSE.classList.remove('active');
    }
});

OPEN.addEventListener('click', () => {
    if (CLOSE.classList.contains('close')) {
        CLOSE.classList.add('active');
        OPEN.classList.remove('active');
    }
})