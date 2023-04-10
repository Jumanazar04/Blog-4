const form = document.querySelector('.blogs__form'),
Nname = document.querySelector('.fulname'),
inTitle = document.querySelector('.input__title'),
result = document.querySelector('.form__results'),
btn = document.querySelector('.btn1'),
inText = document.querySelector('.input__text');

btn.addEventListener('click', (e) => {
    e.preventDefault    
    const h2 = document.createElement('h2');
    h2.textContent = Nname.value;
    result.appendChild(h2);

    const p = document.querySelector('p');
    p.textContent = inTitle.value;
    result.appendChild(p);

    console.log('ok');


    btn.reset();

})