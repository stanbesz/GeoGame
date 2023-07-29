import { API_URL, countryList } from "./config";
import { getJSON } from "./helpers";

export const state = {
    score:0,
    gameInfo:{},
    countries:[]
}

const loadCountry = async function(country){
    console.log(country);
    console.log(country.code);
    const res = await getJSON(country.code);
    console.log(res[0]);
    let countryEntry = {
        name:res[0].name,
        altSpellings:res[0].altSpellings,
        ...(res[0].borders&&{borders:res[0].borders}),
        flags:res[0].flags,
        coatOfArms:res[0].coatOfArms,
        population:+res[0].population,
        region:res[0].region,
        currency:res[0].currencies,
        languages:res[0].languages
    };
    
    state.countries.push(countryEntry);
    console.log(state.countries);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setGameInfo(res){
    state.gameInfo=res;
    console.log(state.gameInfo);
}

export const populateState = async function(inputAmount){
    for(let i = 0;i<inputAmount;i++){
        const randInd = getRandomInt(0,countryList.length-1);
        await loadCountry(countryList[randInd]);
        //state.countries.push(countryList[randInd]);
    }
    console.log(state);
}