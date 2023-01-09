import './css/styles.css';



// const response = fetch('https://restcountries.com/v2/name/peru');

// response.then(resp => resp.json()).then(data => console.log(data))

const inputRef = document.querySelector("#search-box");
const countryListRef = document.querySelector('.country-list');
const countryInfoRef = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;
const MAX_COUNTRIES = 10;
const MORE_MAX = 'More MAX';


const BASE_URL = ''


// input.addEventListener('submit', fetchCountries)

// function fetchCountries(name) {
//     name.preventDefault();
//     const { query } = name.currentTarget;
//    fetchCountriesApi(countri.value).then()
// }

// function fetchCountriesApi(countri) {
//     const BASE_URL = 'https://restcountries.com/v2/name/peru'
//     // const key = ''
//     return fetch(`${BASE_URL}/q=${countri} `)
// }