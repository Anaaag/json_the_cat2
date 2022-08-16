const breedName = process.argv[2];
const request = require('request');



const fetchBreedDescription = ('Siberian', (error, description) => {
  const url = `https"//api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Error: The Breed you are looking for is not found');
    } else {
      callback(null, data[0].description);
    }
  });
});





