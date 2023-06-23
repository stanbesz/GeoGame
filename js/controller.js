'using strict';

import { API_URL } from "./config";

const commentSection = document.querySelector('.comment-section');
const gameArea = document.querySelector('.game-area');
const removeLastCommentBorder = function(){
    const lastComment = commentSection.lastElementChild;
    lastComment.style.borderBottom = "none";
    console.log(lastComment);
}
removeLastCommentBorder();
console.log('Initial setup');

const checkGameArea = function(){
    if(gameArea.hasChildNodes){

    }
}

const renderCountry = function (data) {

    //console.log(data);
    console.log(Object.values(data[0].currencies));
    const lang = Object.values(data[0].languages);
    const html = `
    <article class="country">
      <img class="country-flag" src="${data[0].flags.png}" />
      <div class="country-information">
      <div class="country-row">
        <h3 class="country-name">${data[0].name.common}</h3>
        <h3 class="country-region">${data[0].region}</h4>
      </div>
        <p class="country-population"><span>👫</span>${(
          +data[0].population / 1000000
        ).toFixed(1)} million people</p>
        <p class="country-language"><span>🗣️</span>${[...lang].join('/')}</p>
        <p class="country-currency"><span>💰</span>${Object.values(data[0].currencies)[0].name} ${Object.values(data[0].currencies)[0].symbol}</p>
      </div>
    </article>
    `;
    
    gameArea.insertAdjacentHTML('beforeend', html);
    gameArea.style.opacity = 1;
  };

const getCountry = async function(searchTag='name',countryName){
 let request = await fetch(`${API_URL}${searchTag}/${countryName}`);
 let country = await request.json();
 renderCountry(country);
 console.log(country);
}

//getCountry(...[,'germany']);
getCountry('demonym','peruvian');

