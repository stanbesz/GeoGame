
import { API_URL } from "./config";
import { getJSON } from "./helpers";
import countryView from "./views/countryView";
import inputView from "./views/inputView";
import * as model from './model';
const gameArea = document.querySelector('.game-area');
const sailBoat = document.getElementById('sail-ship-1');
const submitButton = document.querySelector('.submit-data');
//const inputTable = document.querySelector('.input-data');
const playField = document.querySelector('.game-area');
const inputAmount = document.querySelector('.input-text');
const submitData = document.querySelector('.submit-data');
const gameType = document.querySelector('.game-types');

const controlInputView =  function(){
    const res = inputView.getResult();
    inputView.toggleInputData();
    console.log("In control",res);
    model.setGameInfo(res);
    model.populateState(res.amount);
    console.log(model.state.countries);
}

const controlCountryView = function(){
    countryView.renderSpinner();
    countryView.toggleGameData(model.state.countries[0]);
}

const init = function(){
    inputView.addEventHandler(controlInputView);
    countryView.addEventHandler(controlCountryView);
}
init();

