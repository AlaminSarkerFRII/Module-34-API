
const loadCountries = () =>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();


const displayCountries = countries => { // note : for of and forEach () diye 2 vabei jay
const countriesDiv = document.getElementById('countries'); // div er id k call 
// forEach ()
countries.forEach(country =>{

    const div = document.createElement('div');
    div.classList.add('country'); // add a class 
    // dynamic vabeo kora jay...
    div.innerHTML = ` <h4>Name: ${country.name.common}</h4>
                    <p> Capital : ${country.capital}</p>
                    <p> Time Zone : ${country.timezones}</p>
                    <button onClick="loadCountryByName('${country.name.common}')">Details</button>
    `;

    // const h3 = document.createElement('h3'); // h3 header create ...
    // h3.innerText = country.name.common; // name a common add korte hobe..
    // div.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // div.appendChild(p);
    countriesDiv.appendChild(div);
});
   
}

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetails(data[0])); // object akhare pabo tai index no. dite hobe
  
}

// display korte hobe details k 

const countryDetails = country =>{
    // console.log(country)
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = ` <h3>${country.name.common}</h3> 
                            <p> Population :  ${country.population} </p>
                            <small>Time Zone : ${country.timezones}</small>
                            <img width="200px" src="${country.flags.png}">
    `;
}