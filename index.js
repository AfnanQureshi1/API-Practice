var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts',
  headers: { }
};

axios(config)
.then(function (response) {
    //console.log(response);
    // Get an array of key-value pairs from the object
const entries = response.data;
//console.log(entries);
// Iterate through each property and its value using forEach loop
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
//   console.table(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
