document.addEventListener('DOMContentLoaded',() => {
    const but = document.querySelector('.button');
    const inp = document.querySelector('.input');
    const main = document.querySelector('.main');

    const APIKEY = `pF2IQn7fAVpPLAZm5gMPsdzlvWuMhYLY`;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;

    but.addEventListener('click',() =>{
        url = url + inp.value;
        const req = fetch(url);
        req.then(response => response.json())
        .then(content => {
        console.log(content)
        let img = document.createElement('img');
        img.src = content.data[0].images.downsized.url;
        main.appendChild(img);
        
        url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    })
        .catch(err => console.error(err))
    })
})

