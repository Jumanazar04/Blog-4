const card = document.querySelector('.search__card');
const input = document.querySelector('.form__search');

let url = 'https://api.newscatcherapi.com/v2/search?q=Apple';
let searchurl = 'https://api.newscatcherapi.com/v2/search?q=';

function datafetch () {
    

    if (input.value){
        url = `${searchurl}${input.value}`
    }else {
        let url = 'https://api.newscatcherapi.com/v2/search?q=Apple';
    }
    
    const options = {
        method: 'GET',
        params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
            'x-api-key': 'lZvoG8aeAeTBVHR-3NAXqNJs3dOui47f42pUSUKJkD8'
        },
    
    };//4w3vSMVLAar5GOM7-IC5P0T7oviH2NIoJk6Xo_wC04s


    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        const sliced = data.articles.slice(1,5);
        // console.log(sliced);
        card.innerHTML = '';
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

            card.appendChild(box);
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
}

datafetch();
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        datafetch();
        input.value = '';
    }

});







  