var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

    axios(config)
.then(function (response) {
    response.data.forEach(person => {
        console.log(`name is ${person.name} and city is ${person.address.city}`);
    });
//   console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});