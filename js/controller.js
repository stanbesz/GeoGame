'using strict';

import { API_URL } from "./config";
import { getJSON } from "./helpers";
import countryView from "./views/view";

const commentSection = document.querySelector('.comment-section');
const gameArea = document.querySelector('.game-area');
const removeLastCommentBorder = function(){
    const lastComment = commentSection.lastElementChild;
    lastComment.style.borderBottom = "none";
    console.log(lastComment);
}
removeLastCommentBorder();

const checkGameArea = function(){
    if(gameArea.hasChildNodes){

    }
}



// const getCountry = async function(searchTag='name',countryName){
//  let request = await fetch(`${API_URL}${searchTag}/${countryName}`);
//  let country = await request.json();
//  console.log(country);
// }
const handleCountryView = async function(){
const country = await getJSON('demonym','peruvian');
console.log(country);
countryView.render(country);
}
handleCountryView();
//getCountry(...[,'germany']);
//getCountry('demonym','peruvian');

