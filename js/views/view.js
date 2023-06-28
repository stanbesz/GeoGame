class CountryView{
    //_commentSection = document.querySelector('.comment-section');

    _gameArea = document.querySelector('.game-area');
    _renderMessage = "Something went wrong";
    render(data){
        if(!data){
            this._renderError();
        }
        else{
            this.generateCover();
        }
    }
    generateCover(){
        const html = `<div class="cover-game-area"
        <form class="cover-game-area-form">
          <label for="fname">What to guess:</label>
          <input type="text" id="input-prop-id"><br>
          <label for="lname">Difficulty:</label>
          <input type="text" id="country-input-id"><br>
          <input type="submit" value="Submit" id="start-game-button">
        </form>
        </div>`;
        this._gameArea.insertAdjacentHTML('beforeend', html);
        this._gameArea.style.opacity = 1;
    }
    generateMarkup(data){
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
        
        this._gameArea.insertAdjacentHTML('beforeend', html);
        this._gameArea.style.opacity = 1;
    }
    _renderError(){
        alert(this._renderMessage);
    }
}
export default new CountryView();