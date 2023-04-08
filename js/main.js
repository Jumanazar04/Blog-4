const btn = document.querySelector('.ham_btn');
const menuCard = document.querySelector('.menu__card');

btn.addEventListener('click', function () {
    menuCard.classList.toggle('active')
})