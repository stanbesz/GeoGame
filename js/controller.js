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

const handleCountryView = async function(){
const country = await getJSON('demonym','peruvian');
countryView.render(country);
}
handleCountryView();


