const url = (protocol) => (subdomain) => (domain) => (tld) => (endpoint) =>
  `${protocol}${subdomain}.${domain}.${tld}/${endpoint}`;

const fullstack = url("https://")("www")("fullstackacademy")("com");
const weatherApi = fullstack("weather");
const stocksApi = fullstack("stocks");

console.log(weatherApi);
console.log(stocksApi);
