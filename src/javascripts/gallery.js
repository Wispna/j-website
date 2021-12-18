import { pictures } from './art'


export function gallery(){
    for (let p of pictures){
        let p_thumb = document.getElementById('p' + p.id)
        let carousel_portfolio = document.getElementById('carousel' + p.id);
        p_thumb.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="img-thumbnail"/>
        `
        carousel_portfolio.innerHTML = `
            <img src="${p.image}" class="d-block w-100" alt="${p.name}">
        `
       /* h_thumb.onclick = function(){
           
        }*/
    }
}