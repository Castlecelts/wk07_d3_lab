const PubSub = require('../helpers/pub_sub.js');

const CountryDropdownView = function (container) {
  this.container = container;
}
CountryDropdownView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:all-country', (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  });

  this.container.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('CountryDropdownView:change', selectedIndex);
  })
}

CountryDropdownView.prototype.populate = function (country) {
  country.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option);
  })
}

module.exports = CountryDropdownView;
