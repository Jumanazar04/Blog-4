const btn = document.querySelector('.ham_btn');
const menuCard = document.querySelector('.menu__card');

btn.addEventListener('click', function () {
    menuCard.classList.toggle('active')
})

// const form = document.querySelector('.form__register');
// const Fname = document.querySelector('.Fname');
// const Lname = document.querySelector('.Lname');
// const Uname = document.querySelector('.Uname');
// const Password = document.querySelector('.Password');
// const btn1 = document.querySelector('.register__btn');

// form.addEventListener('submit', () => {

//     console.log('ok');

//     if (Fname.value == '') {
//         Fname.classList.add('active1')
//     }else if (Lname == '') {
//         Lname.classList.add('active1')
//     }if (Uname.value == '') {
//         Uname.classList.add('active1')
//     }else if (Password == '') {
//         Password.classList.add('active1')
//     }else {

//     }
// })