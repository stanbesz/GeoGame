class InputView{
    _parent = document.querySelector('.game-container');
    _renderMessage = "Something went wrong with the inputs";
    _inputForm = document.querySelector('.input-data');
    _inputData = document.querySelector('.input-text');
    _inputTypes = document.querySelector('.game-types');
    _submitButton = document.querySelector('.submit-data');
    result = {};

    toggleInputData(){
      if(this._parent.querySelector('.country') && Array.from(this._inputForm.classList).includes('hidden')){
        this._inputForm.classList.toggle('hidden');
      }
      else{
        this._inputForm.classList.toggle('hidden');
      }
    }
    _clearInput(){
      this._inputData.value="";
      this._inputTypes.value="game-flag";
      //this.result={};
    }
    _renderError(){
        alert(this._renderMessage);
    }
    _setResult(){
      if(!this._inputData.value||!this._inputTypes.value){
        this._renderError();
      }
      else{
      this.result['amount']=this._inputData.value;
      this.result['game-type']=this._inputTypes.value;
      }
    }
    getResult(){
      return this.result;
    };
    addEventHandler(handler){
      this._submitButton.addEventListener('click',(e)=>{
        e.preventDefault();
        this._setResult();
        this._clearInput();
        handler();
      });
    }
}
export default new InputView();