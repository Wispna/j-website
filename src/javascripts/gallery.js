import { pictures } from './art'


export function gallery(){
    for (let p of pictures){
        let p_thumb = document.getElementById('p' + p.id)
        let carousel_portfolio = document.getElementById('carousel' + p.id);
        p_thumb.innerHTML = `
            <picture>
            <source type="image/webp" srcset="${p.wimage}">
            <source type="image/jpg" srcset="${p.image}">
            <img src="${p.image}" alt="${p.name}" class="img-thumbnail"/>
            <picture>
        `
        carousel_portfolio.innerHTML = `
            <picture>
            <source type="image/webp" srcset="${p.wimage}">
            <source type="image/jpg" srcset="${p.image}">
            <img src="${p.image}" class="d-block w-100" alt="${p.name}">
            <picture>
        `
    }
}