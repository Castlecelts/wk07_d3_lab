const Country = require('./models/country.js');
const CountryDropdownView = require('./views/country_dropdown_view.js');
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getCountryData();
  country.bindEvents();

  const selectContainer = document.querySelector('select#countries');
  const countryDropdown = new CountryDropdownView(selectContainer);
  countryDropdown.bindEvents();

  const selectElement = document.querySelector('div#country');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
});
