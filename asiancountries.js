// Fetching data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filtering countries from Asia continent/region
    const asiaCountries = data.filter(country => country.region === 'Asia');

    console.log("Countries from Asia continent/region:");
    asiaCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // Filtering countries with a population of less than 2 lakhs (200,000)
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    console.log("\nCountries with a population of less than 2 lakhs:");
    smallPopulationCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // Printing total population of countries
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);

    console.log("\nTotal population of countries:", totalPopulation);

    // Printing the country that uses US dollars as currency
    const usDollarCountry = data.find(country => {
      const currencies = Object.values(country.currencies);
      return currencies.includes('USD');
    });

    console.log("\nCountry that uses US dollars as currency:");
    console.log(`Name: ${usDollarCountry.name.common}, Capital: ${usDollarCountry.capital}, Flag: ${usDollarCountry.flags.png}`);
  })
  .catch(error => console.error('Error fetching data:', error));
