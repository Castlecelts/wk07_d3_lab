const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Country = function(){
  this.data = null;
};

Country.prototype.getCountryData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((arrayOfCoutries) => {
    this.data = arrayOfCoutries;
    PubSub.publish('Country:all-country', this.data);
  })
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('CountryDropdownView:change', (event) => {
    const selectedCountry = this.getCountry(event.detail);
    console.log(selectedCountry);
    PubSub.publish('Country:SelectedCountry', selectedCountry);
  })
};

Country.prototype.getCountry = function(index){
  return this.data[index];
}

module.exports = Country;
