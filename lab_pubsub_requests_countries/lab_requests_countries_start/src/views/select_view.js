const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:SelectedCountry', (event) => {
    const country = event.detail;
    this.render(country);
  });
};

SelectView.prototype.render= function(country){
  const infoCountry = document.createElement('p');
  infoCountry.textContent = `Country: ${country.name}`;
  this.element.innerHTML = '';
  this.element.appendChild(infoCountry);

  const inforegion = document.createElement('p');
  inforegion.textContent = `Region: ${country.region}`;
  this.element.appendChild(inforegion);

  const infoflag = document.createElement('img');
  infoflag.setAttribute('src', country.flag)
  // infoflag.textContent = `Flag: ${country.flag}`;
  this.element.appendChild(infoflag);

  const infoLanguageList = this.createLanguageList(country);
  this.element.appendChild(infoLanguageList);

};
SelectView.prototype.createLanguageList = function (languageData){
  const list = document.createElement('ul');
  languageData.flag.forEach((language, index) => {
    console.log(languageData);
    const ele = document.createElement('li');
    ele.textContent = language;
    ele.value = index;
    list.appendChild(ele);
  })
  return list;
}

module.exports = SelectView;
