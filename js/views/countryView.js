import SCORE_PER_COUNTRY from '../config';
import spinner from '../../images/spinner.svg';
class CountryView{
    _gameArea = document.querySelector('.game-area');
    _parent = document.querySelector('.game-container');
    _renderMessage = "Something went wrong with country data";
    score = SCORE_PER_COUNTRY;
    _lastChecked;
    _gameType;

    render(data){
        if(!data){
            this._renderError();
        }
        else{
            this.generateMarkup(data);
        }
    }

    
    toggleGameData(data){
      const inpElem = this._parent.querySelector('.input-data');
      this.renderSpinner();
      this.render(data);
      if(Array.from(inpElem.classList).includes('.hidden')){
        this._gameArea.classList.toggle('hidden');
      }
      if(!Array.from(this._gameArea.classList).includes('.hidden')){
        this._gameArea.classList.toggle('hidden');
      }
    }

    generateMarkup(data){
        const lang = Object.values(data?.languages);
        const html = `
        <!--<form class="country-guess">-->
        <article class="country">
          <img class="country-flag" src="${data?.flags.svg}" />
          <div class="country-information">
          <button class="country-hint" title="This will reduce potential points!">Hint</button>
            <h3 class="country-region hidden">Area: ${data?.region}</h4>
            <p class="country-population hidden"><span>👫</span>${(
              +data?.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country-language hidden"><span>Spoken language 🗣️: </span>${[...lang].join('/')}</p>
            <p class="country-currency hidden"><span>Currency 💰:</span>${Object.values(data?.currency)[0]?.name} ${Object.values(data?.currency)[0]?.symbol}</p>
            <h3 class="country-name hidden">${data?.name?.common}</h3>
            <input type="text" class="game-text">
          </div>
        </article>
        <!--</form>-->
        `;
        
        this._gameArea.insertAdjacentHTML('beforeend', html);
        this._gameArea.style.opacity = 1;
    }
    _renderError(){
        alert(this._renderMessage);
    }
    renderSpinner(){
      const markup = `
      <div class="spinner">
      <svg>
        <use href="${spinner}.svg#icon-loader"></use>
      </svg>
    </div>
      `;
      this._gameArea.insertAdjacentHTML('afterbegin', markup);
    }
    addEventHandler(handler){
      this._gameArea.addEventListener('click',function(e){
        e.preventDefault();
        const btn = e.target.closest('.country-hint');
        this._lastChecked = !this._lastChecked ? btn.nextElementSibling:this._lastChecked.nextElementSibling;
        this._lastChecked.classList.remove('hidden');
        //this.score= this.score-30;
        console.log(this.score);
        console.log(this._lastChecked);
      });
      handler();
    }
}
export default new CountryView();