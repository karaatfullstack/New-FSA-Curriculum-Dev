const countries = document.getElementById("countries");

async function getCountries() {
    fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((country) => {
                console.log(country);

                // template literal to render country name, flag, capital, region, and population as <li>
                const countryList = document.createElement("li");
                countryList.innerHTML = `
                    <h2><a href="">${country.name.common}</a></h2>
                    <img src="${country.flags.svg}" alt="${country.name.common} flag" height="100" width="200" />
                    <p class="capital-text">Capital: ${country.capital}</p>
                    <p class="region-text">Region: ${country.region}</p>
                    <p class="population-text">Population: ${country.population}</p>
                `;

                // add class 'country' to each <li>
                countryList.classList.add("country-card");

                countries.appendChild(countryList);
            });
        });
}

getCountries();

// export getCountries for testing
// module.exports = getCountries;
