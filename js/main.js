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


const card1 = document.querySelector('.blogs__card');

let url = 'https://api.newscatcherapi.com/v2/search?q=Html';

const options = {
    method: 'GET',
    params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    headers: {
        'x-api-key': '4w3vSMVLAar5GOM7-IC5P0T7oviH2NIoJk6Xo_wC04s'
    },

};

fetch(url, options)
.then(response => response.json())
.then(data => {
    const sliced = data.articles.slice(1,4);
    console.log(sliced);
    card1.innerHTML = '';
    sliced.map((Apple) => {
        const { media, author, title, summary } = Apple;

        const box = document.createElement('div')
        box.classList.add('search__box');
        

        const img = document.createElement('img');
        img.src = media;
        img.alt = title;
        box.appendChild(img);

        const div = document.createElement('div');
        box.appendChild(div);

        const h3 = document.createElement('h3');
        h3.textContent = title;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = author;
        div.appendChild(p);

        const p1 = document.createElement('p');
        p1.textContent = summary;
        div.appendChild(p1);

        card1.appendChild(box);
        box.appendChild(div)
        
        // return `
        // <div class="search__box">
        //     <img src="${media}" alt="img">
        //     <div>
        //         <h3>${title}</h3>
        //         <p>${author}</p>
        //         <p>${summary}</p>
        //     </div>
        // </div>
        // `
    })
    
})
.catch(err => console.error(err));