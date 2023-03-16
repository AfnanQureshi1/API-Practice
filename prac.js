var axios = require('axios');
var data = '{\n  "action": "build a mern stack application"\n}';

var config = {
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts',
  headers: { 
    'Content-Type': 'text/plain'
  },
  data : data
};

axios(config)
.then(function (response) {
    response.data.forEach(person => {
        console.log(`body is ${person.body}`);
    });
//   console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});