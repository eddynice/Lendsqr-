import axios from 'axios'

const url = ' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ';
const ur="https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id "
export const fetchPost = () => axios.get(url)


// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });